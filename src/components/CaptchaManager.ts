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

import { createContext, useReducer } from "react";
import {
    ICaptchaContextState,
    captchaContextReducer,
    captchaStatusReducer,
    ICaptchaContextReducer,
    ProsopoCaptchaClient,
    CaptchaEventCallbacks,
} from "@prosopo/procaptcha";


export function useCaptcha(defaultContext: ICaptchaContextState, callbacks?: CaptchaEventCallbacks): ProsopoCaptchaClient {
    const [context, updateContext] = useReducer(captchaContextReducer, defaultContext);
    const [status, updateStatus] = useReducer(captchaStatusReducer, {});
    return new ProsopoCaptchaClient({ state: context, update: updateContext }, { state: status, update: updateStatus }, callbacks);
}

export const CaptchaContextManager = createContext({
    state: {
        config: {
            "providerApi.baseURL": "",
            "providerApi.prefix": "",
            "dappAccount": "",
            "dappUrl": "",
            "solutionThreshold": 0
        }
    },
    update: () => {},
} as ICaptchaContextReducer);
