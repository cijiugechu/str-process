import { it, describe, expect } from "vitest"
import { StrProcess } from "../src"

describe('StrProcess', () => {
  it('should be a class', () => {
    expect(typeof StrProcess).toBe('function')
  })

  it('can be construct with `of`', () => {
    const strProcess = StrProcess.of()
    expect(strProcess).toBeInstanceOf(StrProcess)
  })

  it('should work with `runWith`', () => {
    const strProcess = StrProcess.of()
    expect(strProcess.runWith('hello')).toBe('hello')
  })

  it('should work with `map`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.map(v => v.toUpperCase())
    expect(strProcess2.runWith('hello')).toBe('HELLO')
  })

  it('should work with `unbox`', () => {
    const strProcess = StrProcess.of()
    const fn = strProcess.unbox()
    expect(fn('hello')).toBe('hello')
  })

  it('should work with `upperCase`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.upperCase()
    expect(strProcess2.runWith('hello')).toBe('HELLO')
  })

  it('should work with `lowerCase`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.lowerCase()
    expect(strProcess2.runWith('HELLO')).toBe('hello')
  })

  it('should work with `alphaBet`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.alphaBet()
    expect(strProcess2.runWith('h3e5l lo')).toBe('hello')
  })

  it('should work with `alphaBetWithSpace`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.alphaBetWithSpace()
    expect(strProcess2.runWith('h3e5l lo')).toBe('hel lo')
  })

  it('should work with `digits`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.digits()
    expect(strProcess2.runWith('h3e5l lo')).toBe('35')
  })

  it('should work with `maxLength`', () => {
    const strProcess = StrProcess.of()
    const strProcess2 = strProcess.maxLength(3)
    expect(strProcess2.runWith('hello')).toBe('hel')
  })

  it('should work with chained calls', () => {
    const process = StrProcess
      .of()
      .upperCase()
      .lowerCase()
      .alphaBet()
      .map(v => v.slice(0, 3))
      .unbox()

    expect(process('h e3ll5o')).toBe('hel')
  })
})