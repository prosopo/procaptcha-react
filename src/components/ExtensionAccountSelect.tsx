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
import { SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { TExtensionAccount } from "@prosopo/procaptcha";


export const ExtensionAccountSelect = ({value, options, onChange}: 
        {value?: TExtensionAccount, options: TExtensionAccount[], onChange: (value: TExtensionAccount | null) => void}) => {
    return (
        <Autocomplete
            disablePortal
            id="select-accounts" // TODO
            options={options}
            value={value}
            isOptionEqualToValue={(option, value) => option.address === value.address}
            onChange={(event: SyntheticEvent<Element, Event>, value: TExtensionAccount | null) => onChange(value)}
            sx={{ width: 550 }} // TODO prop
            getOptionLabel={(option: any) => `${option.meta.name}\n${option.address}`}
            renderInput={(props) => <TextField {...props} label="Select account" />} // TODO label
        />
    );
}

export default ExtensionAccountSelect;
