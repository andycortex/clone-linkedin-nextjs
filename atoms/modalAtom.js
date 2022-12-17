import {atom} from "recoil"

export const modalState = atom({
    key: "modalState",
    default: false
});

export const modalTypesState = atom({
    key: "modalTypesState",
    default: "dropIn"
})