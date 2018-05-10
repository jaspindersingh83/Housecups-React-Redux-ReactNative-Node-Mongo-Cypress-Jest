// Score Actions
export const UPDATESCORE = 'UPDATESCORE';

export const updateScore = async (house) => {
  return {
    type: UPDATESCORE,
    payload: {
      data: house,
    },
  };
};
