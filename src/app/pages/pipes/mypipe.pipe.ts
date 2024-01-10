import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mypipe",
})
export class MypipePipe implements PipeTransform {
  transform(wholeText: string, searchQuery: string): string {
    if (!searchQuery) {
      return wholeText;
    }
    const re = new RegExp(searchQuery, "gi");
    return wholeText.replace(re, '<span class="heighlight">$&</span>');
  }
}
