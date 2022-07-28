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
import { Avatar } from "@mui/material";
import { CaptchaResponseCaptcha } from "@prosopo/procaptcha";

import { useStyles } from "../styles";


export function CaptchaWidget({ challenge, solution, onChange }:
    {challenge: CaptchaResponseCaptcha, solution: number[], onChange: (index: number) => void}) {
    // TODO challenge.items
    //const items = Array.from(Array(9).keys());
    console.log("CHALLENGE", challenge);
    const items = challenge.captcha.items;
    const classes = useStyles();

    return (
      <>
        {items.map((item, index) => <Avatar
          key={index}
          src={item.path} // TODO challenge.items[].path...
          variant="square"
          className={classes.captchaItem + " " + (solution.includes(index) ? " " + classes.captchaItemSelected : "")}
          onClick={() => onChange(index)} />
        )}
      </>
    );
  }

  export default CaptchaWidget;
