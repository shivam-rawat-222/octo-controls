import {
  Component,
  ViewEncapsulation,
  HostListener,
  ElementRef,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { switcherArrowFn, parentNavActive, checkHoriMenu } from './sidebar';
import { fromEvent } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TranslatorService } from '../../translator/translator.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  public menuItems!: Menu[];
  public url: any;
  public routerSubscription: any;
  public windowSubscribe$!:any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef
  ) {
    this.checkNavActiveOnLoad();
  }
  // To set Active on Load
  checkNavActiveOnLoad() {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;

      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.closeNavActive();
          setTimeout(() => {
            let sidemenu = document.querySelectorAll('.side-menu__item.active');
            let subSidemenu = document.querySelectorAll(
              '.sub-side-menu__item.active'
            );
            sidemenu.forEach((e) => e.classList.remove('active'));
            subSidemenu.forEach((e) => e.classList.remove('active'));
          }, 100);
        }
        if (event instanceof NavigationEnd) {
          menuItems.filter((items: any) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems: any) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems: any) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
          setTimeout(() => {
            parentNavActive();
          }, 200);
        }
      });
    });
  }

  checkCurrentActive() {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
      let currentUrl = this.router.url;
      menuItems.filter((items: any) => {
        if (items.path === currentUrl) {
          this.setNavActive(items);
        }
        if (!items.children) {
          return false;
        }
        items.children.filter((subItems: any) => {
          if (subItems.path === currentUrl) {
            this.setNavActive(subItems);
          }
          if (!subItems.children) {
            return false;
          }
          subItems.children.filter((subSubItems: any) => {
            if (subSubItems.path === currentUrl) {
              this.setNavActive(subSubItems);
            }
          });
          return;
        });
        return;
      });
    });
  }
  //Active Nav State
  setNavActive(item: any) {
    this.menuItems.filter((menuItem) => {

      if (menuItem !== item) {
        menuItem.active = false;
        document.querySelector('.app')?.classList.remove('sidenav-toggled');
      document.querySelector('.app')?.classList.remove('sidenav-toggled1');

        this.navServices.collapseSidebar = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
          if (submenuItems.children) {
            submenuItems.children.forEach((subsubmenuItems) => {
              if (
                subsubmenuItems.children &&
                subsubmenuItems.children.includes(item)
              ) {
                menuItem.active = true;
                submenuItems.active = true;
                subsubmenuItems.active = true;
              }
            });
          }
        });
      }
    });
  }
  // Toggle menu
  toggleNavActive(item: any) {
    if (!item.active) {

      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
    document.querySelector("#custom-main-container")?.addEventListener("click",()=>{
      if(document.querySelector("body")?.classList.contains("horizontal")){
        item.active =  false
      }
    })
  }

  // Close Nav menu
  closeNavActive() {
    this.menuItems.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      if (!a.children) {
        return false;
      }
      a.children.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
      return;
    });
  }

  closeNavActive1(item:any,menuItem:any = ""){
    if(document.querySelector('body')?.classList.contains(".horizontal")){
      setTimeout(() => {
        item.active = false
        if(menuItem != ""){
          menuItem.active = false
        }
      }, 100);
    }
  }

  ngOnInit(): void {
    switcherArrowFn();


// detect screen size changes
 this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          // small screen
          this.checkCurrentActive();
        } else {
          // large screen
          document
            .querySelector('body.horizontal')
            ?.classList.remove('sidenav-toggled');
            setTimeout(() => {
          if (document.querySelector('.horizontal')) {
            this.closeNavActive();

              parentNavActive();

          }}, 100);
        }
      });
      setTimeout(() => {
        let horizontal: any = document.querySelectorAll('#myonoffswitch35');
        let vertical: any = document.querySelectorAll('#myonoffswitch34');
        let horizontalHover: any = document.querySelectorAll('#myonoffswitch111');
        fromEvent(vertical, 'click').subscribe(() => {
          this.checkCurrentActive();
        });
        fromEvent(horizontal, 'click').subscribe(() => {
          this.closeNavActive();
        });
        fromEvent(horizontalHover, 'click').subscribe(() => {
          this.closeNavActive();
        });
      }, 100)

    const WindowResize = fromEvent(window, 'resize')
    // subscribing the Observable
    this.windowSubscribe$ = WindowResize.subscribe(() => {
      checkHoriMenu();
    });

  let maincontent: any = document.querySelectorAll('.main-content');
    fromEvent(maincontent, 'click').subscribe(() => {
      if (document.querySelector('body')?.classList.contains('horizontalmenu')) {
        this.closeNavActive();

        setTimeout(()=>{parentNavActive()}, 100)
      }
    });
  }


  sidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
      this.navServices.collapseSidebar = false;
    }
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }
  // ngDoCheck() {
  //   if (document.querySelector('.horizontal')) {
  //     document.querySelector('.horizontal .main-content')?.addEventListener('click', () => {this.closeNavActive();});
  //   }
  // }

  ngOnDestroy(){
    // unsubscribing the Observable
    this.windowSubscribe$.unsubscribe()
  }
}
