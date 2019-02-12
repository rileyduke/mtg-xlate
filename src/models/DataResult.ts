import { JapaneseResult } from "./JapaneseResult";
import { SenseResult } from "./SenseResult";

export interface DataResult {
    attribution: string;
    is_common: boolean;
    japanese: JapaneseResult[];
    senses: SenseResult[];
}