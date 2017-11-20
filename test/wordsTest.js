const chai = require('chai');
const expect = chai.expect;
import {words} from '../code/words'

describe('Find occurences of words', () =>{
  it('Should inform the user when no sentence was passed', () =>{
    const expectedResult = "You didn't pass in a sentence"

    expect(words()).to.equal(expectedResult)
  })

  it('Should inform the user when an empty string was passed', () =>{
    const expectedResult = "You didn't pass in a sentence"

    expect(words("")).to.equal(expectedResult)
  })

  it('should inform the user if something other than a string was passed', () =>{
    const expectedResult = "You didn't pass in a sentence"

    expect(words(123)).to.equal(expectedResult)
  })

  it('should return the right number of occurences for each word in a sentence', () =>{
    const expectedResult = {"kachi":2, "okereke":1, "wilson":1}

    expect(words("wilson kachi okereke kachi")).to.deep.equal(expectedResult)
  })

  it('should return the right number of occurences for each word in a sentence', () =>{
    const expectedResult = {"boa":6, "coon":5, "lab":4}

    expect(words("boa coon boa lab coon lab lab boa coon lab boa coon coon boa boa")).to.deep.equal(expectedResult)
  })

  it('should discard digits if there are any in the sentence', () => {
    const expectedResult = {"tick":2, "stuck": 1}

    expect(words("1243 1 tick tick stuck 50")).to.deep.equal(expectedResult)
  })
})
