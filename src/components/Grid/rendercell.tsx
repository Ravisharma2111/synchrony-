import { Button, Tooltip } from "@material-ui/core";
import useStyles from "./styles";
const RenderCell = ({ title = "", toolTip }) => {
  const classes = useStyles();
  return (
    <>
      {
        toolTip === true ?
          <>
            {
              title.length >= 40 ?
                <Tooltip title={title} arrow>
                  <Button className={classes.toolTip}>{title.substr(0, 37)}...</Button>
                </Tooltip>
                :
                <>{title}</>
            }
          </>
          :
          <>{title}</>
      }
    </>
  );
};

export default function renderTableCell(param: any) {
  if (param) {
    return (
      <RenderCell
        title={param.value}
        toolTip={param.toolTip}
      />
    );
  }
  return (param: any) => (param.field);
};