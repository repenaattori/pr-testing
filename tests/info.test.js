import { expect, test } from "vitest";
import { info } from "../code"

test('Basic test', ()=>{
    console.log('testing');
    
    expect(info()).toBe(0);
})