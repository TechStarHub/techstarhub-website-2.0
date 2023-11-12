import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button } from '@mui/material';
import { useHotkeys } from 'react-hotkeys-hook';

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default function SimpleDialog(props) {
  const { onClose, onOpen, open, search, setSearch } = props;

  const handleClose = () => {
    onClose();
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
      <div className="p-4 rounded-lg flex gap-2 items-center  ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="w-full text-md p-2 rounded-lg bg-slate-200 text-slate-800 outline-slate-400"
          placeholder="Quick Search..."
        />
        <span className="px-2 py-1 rounded-lg bg-slate-500 text-white">
          Esc
        </span>
      </div>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
