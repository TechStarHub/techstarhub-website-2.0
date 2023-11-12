import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material';
import { useHotkeys } from 'react-hotkeys-hook';
import { AiOutlineClose } from 'react-icons/ai';

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default function SimpleDialog(props) {
  const { onClose, onOpen, open, search, setSearch } = props;

  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  const handleClose = () => {
    onClose();
  };

  const handleClear = () => {
    setSearch('');
  };

  // hotkeys for opening and closing the dialog
  useHotkeys('ctrl+k', () => {
    onOpen();
  });

  useHotkeys('esc', () => {
    handleClose();
  });

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <div
        className="flex flex-col gap-4 min-h-[30vh] h-fit w-full"
        style={{ backgroundColor: isDark ? '#29435C' : '#fff' }}
      >
        <div
          style={{ backgroundColor: isDark ? '#29435C' : '#fff' }}
          className="p-4 flex gap-2 items-center w-full relative  "
        >
          <input
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="w-full text-md p-2 rounded-lg bg-slate-200 text-slate-800 outline-slate-400"
            placeholder="Quick Search..."
          />
          {search.trim() !== '' && (
            <AiOutlineClose
              className="text-2xl text-slate-800 absolute  right-20 cursor-pointer hover:text-slate-700"
              onClick={handleClear}
            />
          )}
          <span className="px-2 py-2 shadow-md rounded-lg bg-slate-500 text-white">
            Esc
          </span>
        </div>
      </div>
    </Dialog>
  );
}
