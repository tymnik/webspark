import { initializeGallery } from './js/gallery.js';
import flatpickr from 'flatpickr';

document.addEventListener('DOMContentLoaded', () => {
  const fromDateInput = document.getElementById('fromDate');
  const toDateInput = document.getElementById('toDate');

  initializeGallery();

  const fromDateInstance = flatpickr(fromDateInput, {
    allowInput: true,
    dateFormat: 'd-m-Y',
    altFormat: 'DD-MM-YYYY',
    minDate: '2020-01',
    onClose: () => {
      toDateInstance.close();
    },
  });

  const toDateInstance = flatpickr(toDateInput, {
    allowInput: true,
    dateFormat: 'd-m-Y',
    altFormat: 'DD-MM-YYYY',
    defaultDate: '01-01-2024',
    maxDate: 'today',
    onClose: () => {
      fromDateInstance.close();
    },
  });

  function toggleCalendar(inputId) {
    const inputElement = document.getElementById(inputId);
    const instance = inputElement._flatpickr;
    if (instance.isOpen) {
      instance.close();
    } else {
      instance.open();
    }
  }

  function clearInputValue(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.value = '';
  }

  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const inputId = button.parentElement.querySelector('[data-input]').id;
      toggleCalendar(inputId);
    });
  });

  document.querySelectorAll('[data-clear]').forEach(button => {
    button.addEventListener('click', () => {
      const inputId = button.parentElement.querySelector('[data-input]').id;
      clearInputValue(inputId);
    });
  });
});
