import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
}) => {
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <div className="flex justify-center py-2">
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        className="[&_.MuiButtonBase-root]:!font-semibold [&_.Mui-selected]:!text-white"
      />
    </div>
  );
};

export default Pagination;
