import { expect, test } from "vitest";
import {sum} from '../arithmetic.js'

test('Test sum', ()=>{    
    expect(sum(1,2)).toBe(3);
    expect(sum(5,5)).toBe(10);
    expect(sum(-1,2)).toBe(1);
});

