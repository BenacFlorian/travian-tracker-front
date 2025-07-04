import { Component, ContentChildren, QueryList, AfterContentInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabDirective } from './vertical-tabs.directive';

@Component({
  selector: 'app-vertical-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-tabs.component.html',
  styleUrl: './vertical-tabs.component.scss'
})
export class VerticalTabsComponent implements AfterContentInit {
  @ContentChildren(VerticalTabDirective) tabList!: QueryList<VerticalTabDirective>;
  activeTab = signal(0);
  tabs: { title: string, template: any }[] = [];

  ngAfterContentInit() {
    this.updateTabs();
    this.tabList.changes.subscribe(() => {
      this.updateTabs();
    });
  }

  updateTabs() {
    this.tabs = this.tabList.map(tab => ({
      title: tab.tabTitle,
      template: tab.templateRef
    }));
  }

  setActiveTab(tabId: number) {
    this.activeTab.set(tabId);
  }
}