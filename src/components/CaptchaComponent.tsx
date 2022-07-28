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
import { useEffect, useContext, useReducer } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
    ICaptchaContextReducer,
    ProsopoCaptchaClient,
    ProsopoCaptchaStateClient,
    captchaStateReducer
} from "@prosopo/procaptcha";

import { CaptchaContextManager } from "./CaptchaManager";
import { CaptchaWidget } from "./CaptchaWidget";

import { useStyles } from "../styles";


export function CaptchaComponent({ clientInterface }: { clientInterface: ProsopoCaptchaClient }) {

    const classes = useStyles();

    const manager: ICaptchaContextReducer = useContext(CaptchaContextManager);
    const [state, update] = useReducer(captchaStateReducer, { captchaIndex: 0, captchaSolution: [] });

    const { account, contractAddress } = manager.state;
    const { captchaChallenge, captchaIndex, captchaSolution } = state;
    const totalCaptchas = captchaChallenge?.captchas.length ?? 0;

    const stateClientInterface = new ProsopoCaptchaStateClient(clientInterface, { state, update });

    useEffect(() => {

        clientInterface.onLoad();

    }, []);

    useEffect(() => {
        const extension = clientInterface.getExtension();
        if (contractAddress && extension) {
            extension.setDefaultAccount();
            const defaultAccount = extension.getAccount();
            if (defaultAccount) {
                clientInterface.onAccountChange(defaultAccount);
            }
        }
    }, [contractAddress]);

    useEffect(() => {
        if (account && !captchaChallenge) {
            stateClientInterface.onLoadCaptcha()
                .catch(error => {
                    clientInterface.status.update({ error });
                });
        }
    }, [account]);

    // TODO text strings
    // https://www.npmjs.com/package/i18next

    return (
        <Box className={classes.root}>

            {account && captchaChallenge &&
                <Box className={classes.captchasContainer}>

                    <Box className={classes.captchasHeader}>
                        <Typography className={classes.captchasHeaderLabel}>
                            Select all images with {captchaChallenge.captchas[captchaIndex].captcha.target}
                        </Typography>
                    </Box>

                    <Box className={classes.captchasBody}>

                        <CaptchaWidget challenge={captchaChallenge.captchas[captchaIndex]} solution={captchaSolution[captchaIndex] || []}
                            onChange={stateClientInterface.onChange.bind(stateClientInterface)} />

                        <Box className={classes.dotsContainer}>
                            {captchaChallenge?.captchas.map((_, index) =>
                                <Box key={index} className={captchaIndex === index ? classes.dot : classes.dotActive} />)}
                        </Box>

                    </Box>

                    <Box className={classes.captchasFooter}>
                        <Button onClick={() => stateClientInterface.onCancel()} variant="text">
                            Cancel
                        </Button>
                        <Button onClick={() => stateClientInterface.onSubmit()} variant="contained">
                            {captchaIndex + 1 < totalCaptchas ? "Next" : "Submit"}
                        </Button>
                    </Box>

                </Box>
            }
        </Box>
    );
}

export default CaptchaComponent;
