import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSeeMore]'
})
export class SeeMoreDirective implements OnInit {
  isSeeMore: boolean
  defaultText: string
  seeMoreListener: any
  constructor(private eleRef: ElementRef) {

  }

  ngOnInit(): void {
    // this.eleRef.nativeElement.removeEventListener('click', this.seeMoreListener)
    this.defaultText = this.eleRef.nativeElement.innerText
    this.eleRef.nativeElement.innerText = this.defaultText.substring(0, 20) + "  "
    const readMore = document.createElement("a")
    readMore.href = "javascript:void(0)";
    readMore.innerText = 'see more'
    // readMore.onclick = this.showAllText
    readMore.addEventListener('click', (e) => {
      e.preventDefault()
      this.showAllText()
    })
    this.eleRef.nativeElement.appendChild(readMore)
  }

  showAllText() {
    const readMore = document.createElement("p")
    readMore.innerText = this.defaultText
    this.eleRef.nativeElement.innerHTML = ''
    this.eleRef.nativeElement.appendChild(readMore)
    this.seeMoreListener = readMore.addEventListener('click', (e: any) => {
      e.preventDefault()
      this.ngOnInit()
    })
  }



}
