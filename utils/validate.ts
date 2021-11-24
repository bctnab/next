const isBlank = (value: string | null | undefined): boolean => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};

export {
  isBlank
};
