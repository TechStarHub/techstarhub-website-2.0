import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../../store';
import { BiSearch } from 'react-icons/bi';
import SimpleDialog from './Dialog';

export default function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);

  const [openDialog, setOpenDialog] = useState(false);

  const setSearch = (search) => {
    dispatch(changeSearch(search));
  };

  const handleClose = () => {
    setOpenDialog(false);
    // setSearch('');
  };
  const handleOpen = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <div
        className="flex gap-2 justify-center items-center bg-[#495e7b] hover:bg-[#577193] w-fit px-5 py-2 rounded text-slate-200 cursor-pointer shadow-md hover:shadow-xl transition duration-300 ease-in-out"
        onClick={() => setOpenDialog(true)}
      >
        <BiSearch className="text-2xl font-medium  " />
        <div className="flex gap-8">
          <span className="font-medium">Quick Search...</span>
          <span className="text-slate-400 font-medium">Ctrl+K</span>
        </div>
      </div>
      {/* Dialog Search Box */}
      <SimpleDialog
        onClose={handleClose}
        open={openDialog}
        search={search}
        setSearch={setSearch}
        onOpen={handleOpen}
      />
    </>
  );
}
