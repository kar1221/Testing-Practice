interface analysisResult {
  average: number;
  min: number;
  max: number;
  length: number;
}

function analyzeArray(arr: number[]): analysisResult {
  if(arr.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0
    }
  }

  return {
    average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

export default analyzeArray;