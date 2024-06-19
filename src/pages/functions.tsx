import React from "react";

export const functionService = {
    getCompareDataHistory
};

function convertDate(dateTime) {
    let date = new Date(dateTime);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
}

function getCompareDataHistory(tokenKey) {
    let apiLineGraphData: any = [];
    return fetch('https://api.sonar.watch/history_dashboard?id=' + tokenKey)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data = data.reverse();
                for (let i = 0; i < data.length; i++) {
                    apiLineGraphData.push({ label: convertDate(data[i].updatedAt), amount: data[i].tokensValue });

                }
                return apiLineGraphData;
            }
            return false;
        })
        .catch(err => { return false; });
}
