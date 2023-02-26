import mocha from 'mocha';
import chai from 'chai';
import td from 'testdouble';
import supertest from 'supertest';

import api from '../../../server/api/api';

const app = api;
const request = supertest;
const expect = chai.expect;
const testdouble = td;

export {app, expect, request, testdouble};