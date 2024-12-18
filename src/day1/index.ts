import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let arrayOfLines: string[] = input.trim().split('\n');
        let column1: number[] = [];
        let column2: number[] = [];
        arrayOfLines.forEach(line => {
            let [column1number, column2number] = line.split(/\s+/).map(Number);
            column1.push(column1number);
            column2.push(column2number);
        })

        let sortedColumn1 = column1.sort((a, b) => a - b);
        let sortedColumn2 = column2.sort((a, b) => a - b);

        const difference = sortedColumn1.reduce((accumulator, currentValue, index) => {
            return accumulator + Math.abs(currentValue - sortedColumn2[index])
        }, 0)
        return difference.toString()
    }

    // adding up each number in the left list
    // after multiplying it by the number of times that number appears in the right list.

    solveForPartTwo(input: string): string {
        let arrayOfLines: string[] = input.trim().split('\n');
        let column1: number[] = [];
        let column2: number[] = [];
        arrayOfLines.forEach(line => {
            let [column1number, column2number] = line.split(/\s+/).map(Number);
            column1.push(column1number);
            column2.push(column2number);
        })
        let column1Multiplied = column1.map((x) => x * (column2.filter((v) => v === x).length));
        const total = column1Multiplied.reduce((acc, current) => acc + current, 0)
        return total.toString()
    }
}

export default new Day1;
