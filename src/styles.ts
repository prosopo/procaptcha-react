// Copyright 2021-2022 Prosopo (UK) Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { makeStyles } from "@mui/styles";

const dot = {
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginRight: 5,
  border: "1px solid #CFCFCF",
  backgroundColor: "#FFFFFF",
}

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  captchasContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    border: "1px solid #CFCFCF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
  },
  captchasHeader: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#bdbdbd",
    height: 80,
    paddingLeft: 20
  },
  captchasBody: {
    display: "flex",
    width: 460,
    flexWrap: "wrap",
    height: "max-content",
    paddingTop: 10,
    paddingLeft: 10,
    borderBottom: "1px solid #CFCFCF"
  },
  captchasFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  captchaItem: {
    width: "140px !important",
    borderRadius: 2,
    height: "140px !important",
    marginRight: 10,
    marginBottom: 10
  },
  captchaItemSelected: {    
    border: "2px solid #1976d2"
  },
  captchasHeaderLabel: {
    color: "#ffffff"
  },
  dotsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 15,
    paddingTop: 10
  },
  dot,
  dotActive: {
    ...dot,
    backgroundColor: "#CFCFCF"
  },
});
