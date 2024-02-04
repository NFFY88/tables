const createNextTableId = (): (() => number) => {
  let count = 1
  return function () {
    return count++
  }
}

export const getNextTableId = createNextTableId()
