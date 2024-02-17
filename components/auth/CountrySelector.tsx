"use client";
import React, { useState } from "react";
import countries from "../auth/CountryCodes.json";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";

export default function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
  });

  const handleCountrySelection = (country: any) => {
    setSelectedCountry(country);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Input
          className="border-red-400 cursor-pointer"
          placeholder="Select Country/Region"
          id="country"
          value={`${selectedCountry.name} ${selectedCountry.dial_code}`}
          readOnly
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-60 overflow-y-auto">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => handleCountrySelection(country)}
          >
            {`${country.name} (${country.dial_code})`}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
