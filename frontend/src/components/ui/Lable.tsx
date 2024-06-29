import { ChangeEvent } from "react";

interface LabelledInputTypes {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}


export const Label = ({ label, placeholder, onChange, type }: LabelledInputTypes) => {
    return (
        <div>
            <label className="text-lg font-semibold">{label}</label>
            <input type={type || "text"} placeholder={placeholder} onChange={onChange} className="border p-2 rounded-md w-full" />
        </div>
    )
}