/**
 * Created by root on 17-7-2.
 */


import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  // console.log(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`)
  // return request(`/api/users?_page=${page}&_limit=5`);
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
