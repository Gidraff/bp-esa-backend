/* eslint-disable import/prefer-default-export */
import { findPartnerById } from '../modules/allocations';

/**
 * @desc Retrieves necessary info. to be sent via email for any given placement
 *
 * @param {oject} placement A placement instance from allocation
 *
 * @returns {object} Mail info to be sent
 */
export const getMailInfo = async (placement) => {
  const {
    fellow: { name: developerName, email: developerEmail, location: developerLocation },
    client_name: partnerName,
    client_id: partnerId,
    end_date: rollOffDate,
    start_date: dateStart,
  } = placement;
  const { location: partnerLocation } = await findPartnerById(partnerId);
  return {
    developerName,
    partnerName,
    developerEmail,
    developerLocation,
    partnerLocation,
    rollOffDate,
    startDate: dateStart === '' ? 'not specified' : dateStart,
  };
};
