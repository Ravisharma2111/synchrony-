import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableFooter, TablePagination } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import renderTableCell from './rendercell';
import useStyles from "./styles";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import noDataIcon from '../../assets/icon/nodata.svg';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skeleton from '@material-ui/lab/Skeleton';


const colAni = makeStyles({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: '300px',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: 'red',
    strokeWidth: 1,
  },
  accordionContentt: {

  },
});

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
type Order = 'asc' | 'desc';
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function Row({ row = {}, columns = [], index = 0, accordion = false, rowCollapse }) {
  const aniClasses = colAni();
  const classes = useStyles();
  let cols = columns.filter((col: any) => !col[2] || col[2].type !== 'collapse')
    .map((col: any) => ({
      field: col[0],
      fieldName: col[1],
      isAction: false,
      headerClassName: classes.headerCell,
      cellClassName: classes.headerCell,
      toolTip: false,
      ...((!!col[2] && !!col[2].options) ? col[2].options : {})
    }));
  const [currentIndex, setCurrentIndex] = useState(-1);
  const setCurrentIndexToggle = (cellIndex: any) => {
    let crntIndex: any = cellIndex === currentIndex ? -1 : cellIndex;
    setCurrentIndex(crntIndex)
  }
  const nothingGo = () => { }
  return (
    <><TableRow key={index} onClick={() => { rowCollapse === true ? setCurrentIndexToggle(index) : nothingGo() }}>
      {
        cols.map((col, index) => (
          <TableCell className={`cellrow ${col.cellClassName}${(col.number !== 'undefined' && col.number === true) ? ((row[col.fieldName] < 0) ? ' lessvalue ' : ' greatervalue') : ''}`} key={`cellrow.(${col.field}${index})`} >

            {(col.type !== 'undefined' && col.type === 'link') ?
              <Link to={row['link']}>
                {
                  renderTableCell({
                    value: row[col.fieldName],
                    type: col.fieldName,
                    toolTip: col.toolTip
                  })
                }
              </Link> :
              <>

                {(col.hideZero !== 'undefined' &&
                  col.hideZero === true &&
                  (row[col.fieldName] === '0' || row[col.fieldName] === 0)) ? '' :
                  renderTableCell({
                    value: row[col.fieldName],
                    type: col.fieldName,
                    toolTip: col['toolTip']
                  })
                }
              </>
            }
          </TableCell>))
      }
      {accordion === true && <TableCell className={`cellrow ${index}`} key={`cellrow.(${index}`} >
        <ExpandMoreIcon className={currentIndex === index ? classes.expandOpenIcon : classes.expandIcon} onClick={() => { setCurrentIndexToggle(index) }} />
      </TableCell>}
    </TableRow>
      {accordion === true &&
        <TableRow
          className={currentIndex === index ? `accordioncls open cellrow ${index} ${aniClasses.accordionContentt}` : `accordioncls close cellrow ${index} ${aniClasses.accordionContentt}`}
          key={`collrow.(${index}`}>
          <TableCell className={`cellrow ${index}`} key={`colllcell.(${index}`} colSpan={(cols.length + 1)}>
            {(row && row.hasOwnProperty('accordionData')) ? React.cloneElement(row['accordionData'], { isOpen: currentIndex === index }) : ''}
          </TableCell></TableRow>

      }

    </>
  );
}
function CustomPagination({
  count, page, setPage, rowsPerPage, setRowsPerPage,
}) {


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}

      />
    </>
  );
}

export default function TableGrid({ loading = false, columns = [], rows = [], tablePagination = true, moreLinkText = "", link = "", accordion = false, rowCollapse = false }) {
  // console.log(columns, rows, tablePagination, moreLinkText, link, accordion);

  const classes = useStyles();
  //const history = useHistory();
  const [order, setOrder] = React.useState<Order>('desc');
  const [orderBy, setOrderBy] = React.useState('market_cap');
  const [page, setPage] = React.useState(0);
  let showRecord = tablePagination === true ? 25 : 9999;
  const [rowsPerPage, setRowsPerPage] = React.useState(showRecord);
  // const handleRequest = ()=>{
  //   history.push(link);
  // }
  let cols = columns.filter((col: any) => !col[2] || col[2].type !== 'collapse')
    .map((col: any) => ({
      field: col[0],
      fieldName: col[1],
      isAction: false,
      headerClassName: classes.headerCell,
      cellClassName: classes.headerCell,
      ...((!!col[2] && !!col[2].options) ? col[2].options : {})
    }));

  const changeOrderData = (name = "", type = "") => {
    // disable by name, category, price_24_h, twitter_followers
    if (name === 'id' || name === 'market_cap') {
      let orderType: Order = (type === 'asc') ? 'desc' : 'asc';
      setOrderBy(name);
      setOrder(orderType);
    }
  }

  return (
    <div className={classes.treeTable}>
      <Table className="tree-table" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {cols.map((col: any, index: any) => (<TableCell className={col.headerClassName} key={index} onClick={() => { changeOrderData(col.fieldName, order) }}>
              {col.field} {(col.order !== 'undefined' && col.order === true) && <span><ArrowDropUpIcon className={order === "asc" ? "disabled " : ''} /> <ArrowDropDownIcon className={order === "desc" ? "disabled down" : 'down'} /> </span>}
            </TableCell>))
            }
            {accordion === true && <TableCell className={'headerClassName'} key={(cols.length + 1)}>

            </TableCell>}
          </TableRow>
        </TableHead>
        {!loading && (
          <>
            {rows.length > 0 ? (
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    //  console.log(row);
                    return (<Row
                      row={row}
                      columns={columns}
                      index={index}
                      key={index}
                      accordion={accordion}
                      rowCollapse={rowCollapse}
                    />)
                  })}
              </TableBody>
            ) :
              (
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.nodata} key={'0'} colSpan={(columns.length + 1)} align="center">
                      <div className="nodata"><img src={noDataIcon} alt="" /><p>No Data</p> </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
          </>
        )}

        {loading && (
          <TableBody>
            {
              [0, 1, 2, 3].map(value => (
                <TableRow key={'loading-data-' + value}>
                  {[0, 1, 2, 3, 4, 5, 6].map(value =>
                    <TableCell className={classes.nodata} key={'skeleton' + value}
                      // colSpan={(columns.length+1)}
                      align="center">
                      <div className="nodata">
                        <SkeletonTableCell animation="wave" variant="rectangular" width={30} height={30} />
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            }
          </TableBody>
        )}
        {(moreLinkText && rows.length > 0) !== "" &&
          <TableFooter>
            this is more link text
          </TableFooter>
        }
      </Table>
      {tablePagination === true &&
        <CustomPagination
          count={rows.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      }
    </div>
  );
}

const SkeletonTableCell = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <Skeleton {...props}/> */}
      <Skeleton component="div" animation="wave" height={20} style={{ padding: '6px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }} />
    </div>
  );
}
