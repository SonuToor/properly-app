import React from "react"
import { Label, Input } from "@rebass/forms"
import { FlexContainer } from "."

export interface ISearchBarProps {
  onChange: (newSearchTerm: string) => void
  searchTerm: string
}
export const SearchBar: React.FC<ISearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <FlexContainer axis="column">
      <Label>Search</Label>
      <Input
        placeholder={"Search by description"}
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
    </FlexContainer>
  )
}
