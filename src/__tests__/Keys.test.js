import React from 'react';
import ReactDOM from 'react-dom';

import cat from '../images/cat.jpg';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat4 from '../images/cat4.jpg';
import cat5 from '../images/cat5.jpg';
import cat6 from '../images/cat6.jpg';
import cat7 from '../images/cat7.jpg';
import cat8 from '../images/cat8.jpg';

import Keys from '../Keys'
import { makeImgArr } from '../Keys';

it('should create an array of photos as imported images are availables', () => {

  expect(makeImgArr()).toEqual([cat, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8]);
});
