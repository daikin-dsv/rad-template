'use client';

import * as React from 'react';

import type { DaikinAccordionItem as DaikinAccordionItemWebComponent } from '@daikin-oss/design-system-web-components/components/accordion-item/index.js';
import type { DaikinAccordion as DaikinAccordionWebComponent } from '@daikin-oss/design-system-web-components/components/accordion/index.js';
import type { DaikinAvatar as DaikinAvatarWebComponent } from '@daikin-oss/design-system-web-components/components/avatar/index.js';
import type { DaikinBreadcrumbItem as DaikinBreadcrumbItemWebComponent } from '@daikin-oss/design-system-web-components/components/breadcrumb-item/index.js';
import type { DaikinBreadcrumb as DaikinBreadcrumbWebComponent } from '@daikin-oss/design-system-web-components/components/breadcrumb/index.js';
import type { DaikinButton as DaikinButtonWebComponent } from '@daikin-oss/design-system-web-components/components/button/index.js';
import type { DaikinCalendar as DaikinCalendarWebComponent } from '@daikin-oss/design-system-web-components/components/calendar/index.js';
import type { DaikinCardFooter as DaikinCardFooterWebComponent } from '@daikin-oss/design-system-web-components/components/card-footer/index.js';
import type { DaikinCardHeader as DaikinCardHeaderWebComponent } from '@daikin-oss/design-system-web-components/components/card-header/index.js';
import type { DaikinCard as DaikinCardWebComponent } from '@daikin-oss/design-system-web-components/components/card/index.js';
import type { DaikinCarouselItem as DaikinCarouselItemWebComponent } from '@daikin-oss/design-system-web-components/components/carousel-item/index.js';
import type { DaikinCarousel as DaikinCarouselWebComponent } from '@daikin-oss/design-system-web-components/components/carousel/index.js';
import type { DaikinCheckboxGroup as DaikinCheckboxGroupWebComponent } from '@daikin-oss/design-system-web-components/components/checkbox-group/index.js';
import type { DaikinCheckbox as DaikinCheckboxWebComponent } from '@daikin-oss/design-system-web-components/components/checkbox/index.js';
import type { DaikinChip as DaikinChipWebComponent } from '@daikin-oss/design-system-web-components/components/chip/index.js';
import type { DaikinCombobox as DaikinComboboxWebComponent } from '@daikin-oss/design-system-web-components/components/combobox/index.js';
import type { DaikinDatePicker as DaikinDatePickerWebComponent } from '@daikin-oss/design-system-web-components/components/date-picker/index.js';
import type { DaikinDropdownItem as DaikinDropdownItemWebComponent } from '@daikin-oss/design-system-web-components/components/dropdown-item/index.js';
import type { DaikinDropdown as DaikinDropdownWebComponent } from '@daikin-oss/design-system-web-components/components/dropdown/index.js';
import type { DaikinIconButton as DaikinIconButtonWebComponent } from '@daikin-oss/design-system-web-components/components/icon-button/index.js';
import type { DaikinIcon as DaikinIconWebComponent } from '@daikin-oss/design-system-web-components/components/icon/index.js';
import type { DaikinInlineNotification as DaikinInlineNotificationWebComponent } from '@daikin-oss/design-system-web-components/components/inline-notification/index.js';
import type { DaikinInputGroup as DaikinInputGroupWebComponent } from '@daikin-oss/design-system-web-components/components/input-group/index.js';
import type { DaikinLink as DaikinLinkWebComponent } from '@daikin-oss/design-system-web-components/components/link/index.js';
import type { DaikinListItem as DaikinListItemWebComponent } from '@daikin-oss/design-system-web-components/components/list-item/index.js';
import type { DaikinList as DaikinListWebComponent } from '@daikin-oss/design-system-web-components/components/list/index.js';
import type { DaikinLoading as DaikinLoadingWebComponent } from '@daikin-oss/design-system-web-components/components/loading/index.js';
import type { DaikinLogo as DaikinLogoWebComponent } from '@daikin-oss/design-system-web-components/components/logo/index.js';
// import type { DaikinMenu as DaikinMenuWebComponent } from '@daikin-oss/design-system-web-components/components/menu/index.js';
import type { DaikinModalFooter as DaikinModalFooterWebComponent } from '@daikin-oss/design-system-web-components/components/modal-footer/index.js';
import type { DaikinModalHeader as DaikinModalHeaderWebComponent } from '@daikin-oss/design-system-web-components/components/modal-header/index.js';
import type { DaikinModal as DaikinModalWebComponent } from '@daikin-oss/design-system-web-components/components/modal/index.js';
import type { DaikinPagination as DaikinPaginationWebComponent } from '@daikin-oss/design-system-web-components/components/pagination/index.js';
import type { DaikinProgressBar as DaikinProgressBarWebComponent } from '@daikin-oss/design-system-web-components/components/progress-bar/index.js';
import type { DaikinProgressIndicatorItem as DaikinProgressIndicatorItemWebComponent } from '@daikin-oss/design-system-web-components/components/progress-indicator-item/index.js';
import type { DaikinProgressIndicator as DaikinProgressIndicatorWebComponent } from '@daikin-oss/design-system-web-components/components/progress-indicator/index.js';
import type { DaikinRadioGroup as DaikinRadioGroupWebComponent } from '@daikin-oss/design-system-web-components/components/radio-group/index.js';
import type { DaikinRadio as DaikinRadioWebComponent } from '@daikin-oss/design-system-web-components/components/radio/index.js';
import type { DaikinSelect as DaikinSelectWebComponent } from '@daikin-oss/design-system-web-components/components/select/index.js';
import type { DaikinSlider as DaikinSliderWebComponent } from '@daikin-oss/design-system-web-components/components/slider/index.js';
import type { DaikinTabPanels as DaikinTabPanelsWebComponent } from '@daikin-oss/design-system-web-components/components/tab-panels/index.js';
import type { DaikinTab as DaikinTabWebComponent } from '@daikin-oss/design-system-web-components/components/tab/index.js';
import type { DaikinTableCell as DaikinTableCellWebComponent } from '@daikin-oss/design-system-web-components/components/table-cell/index.js';
import type { DaikinTableHeaderCell as DaikinTableHeaderCellWebComponent } from '@daikin-oss/design-system-web-components/components/table-header-cell/index.js';
import type { DaikinTable as DaikinTableWebComponent } from '@daikin-oss/design-system-web-components/components/table/index.js';
import type { DaikinTabs as DaikinTabsWebComponent } from '@daikin-oss/design-system-web-components/components/tabs/index.js';
import type { DaikinTextArea as DaikinTextAreaWebComponent } from '@daikin-oss/design-system-web-components/components/text-area/index.js';
import type { DaikinTextField as DaikinTextFieldWebComponent } from '@daikin-oss/design-system-web-components/components/text-field/index.js';
import type { DaikinTextMaskedField as DaikinTextMaskedFieldWebComponent } from '@daikin-oss/design-system-web-components/components/text-masked-field/index.js';
import type { DaikinTimePicker as DaikinTimePickerWebComponent } from '@daikin-oss/design-system-web-components/components/time-picker/index.js';
import type { DaikinToastNotificationManager as DaikinToastNotificationManagerWebComponent } from '@daikin-oss/design-system-web-components/components/toast-notification-manager/index.js';
import type { DaikinToastNotification as DaikinToastNotificationWebComponent } from '@daikin-oss/design-system-web-components/components/toast-notification/index.js';
import type { DaikinToggle as DaikinToggleWebComponent } from '@daikin-oss/design-system-web-components/components/toggle/index.js';
import type { DaikinTooltip as DaikinTooltipWebComponent } from '@daikin-oss/design-system-web-components/components/tooltip/index.js';
import type { DaikinTreeItem as DaikinTreeItemWebComponent } from '@daikin-oss/design-system-web-components/components/tree-item/index.js';
import type { DaikinTreeSection as DaikinTreeSectionWebComponent } from '@daikin-oss/design-system-web-components/components/tree-section/index.js';
import type { DaikinTree as DaikinTreeWebComponent } from '@daikin-oss/design-system-web-components/components/tree/index.js';
import { createComponent } from '@lit/react';

type AnyCustomElementConstructor = { new (): HTMLElement };

const resolveElementClass = <T extends AnyCustomElementConstructor>(
    tagName: string
): T => {
    const ctor = globalThis.customElements?.get(tagName);
    if (!ctor) {
        throw new Error(
            `Web component <${tagName}> is not registered. Ensure webcomponents.js loads before using the React wrappers.`
        );
    }
    return ctor as T;
};

export const DaikinAccordion = createComponent({
    tagName: 'daikin-accordion',
    elementClass:
        resolveElementClass<typeof DaikinAccordionWebComponent>('daikin-accordion'),
    react: React
});

export const DaikinAccordionItem = createComponent({
    tagName: 'daikin-accordion-item',
    elementClass: resolveElementClass<typeof DaikinAccordionItemWebComponent>(
        'daikin-accordion-item'
    ),
    react: React,
    events: {
        onToggle: 'toggle'
    }
});

export const DaikinAvatar = createComponent({
    tagName: 'daikin-avatar',
    elementClass: resolveElementClass<typeof DaikinAvatarWebComponent>('daikin-avatar'),
    react: React,
    events: {
        onClick: 'click'
    }
});

export const DaikinBreadcrumb = createComponent({
    tagName: 'daikin-breadcrumb',
    elementClass:
        resolveElementClass<typeof DaikinBreadcrumbWebComponent>('daikin-breadcrumb'),
    react: React
});

export const DaikinBreadcrumbItem = createComponent({
    tagName: 'daikin-breadcrumb-item',
    elementClass: resolveElementClass<typeof DaikinBreadcrumbItemWebComponent>(
        'daikin-breadcrumb-item'
    ),
    react: React
});

export const DaikinButton = createComponent({
    tagName: 'daikin-button',
    elementClass: resolveElementClass<typeof DaikinButtonWebComponent>('daikin-button'),
    react: React,
    events: {
        onClick: 'click'
    }
});

export const DaikinCalendar = createComponent({
    tagName: 'daikin-calendar',
    elementClass:
        resolveElementClass<typeof DaikinCalendarWebComponent>('daikin-calendar'),
    react: React,
    events: {
        onSelect: 'select',
        onSelecting: 'selecting'
    }
});

export const DaikinCard = createComponent({
    tagName: 'daikin-card',
    elementClass: resolveElementClass<typeof DaikinCardWebComponent>('daikin-card'),
    react: React
});

export const DaikinCardFooter = createComponent({
    tagName: 'daikin-card-footer',
    elementClass:
        resolveElementClass<typeof DaikinCardFooterWebComponent>('daikin-card-footer'),
    react: React
});

export const DaikinCardHeader = createComponent({
    tagName: 'daikin-card-header',
    elementClass:
        resolveElementClass<typeof DaikinCardHeaderWebComponent>('daikin-card-header'),
    react: React
});

export const DaikinCarousel = createComponent({
    tagName: 'daikin-carousel',
    elementClass:
        resolveElementClass<typeof DaikinCarouselWebComponent>('daikin-carousel'),
    react: React,
    events: {
        onSelect: 'select'
    }
});

export const DaikinCarouselItem = createComponent({
    tagName: 'daikin-carousel-item',
    elementClass:
        resolveElementClass<typeof DaikinCarouselItemWebComponent>(
            'daikin-carousel-item'
        ),
    react: React
});

export const DaikinCheckbox = createComponent({
    tagName: 'daikin-checkbox',
    elementClass:
        resolveElementClass<typeof DaikinCheckboxWebComponent>('daikin-checkbox'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinCheckboxGroup = createComponent({
    tagName: 'daikin-checkbox-group',
    elementClass: resolveElementClass<typeof DaikinCheckboxGroupWebComponent>(
        'daikin-checkbox-group'
    ),
    react: React
});

export const DaikinChip = createComponent({
    tagName: 'daikin-chip',
    elementClass: resolveElementClass<typeof DaikinChipWebComponent>('daikin-chip'),
    react: React,
    events: {
        onRemove: 'remove'
    }
});

export const DaikinCombobox = createComponent({
    tagName: 'daikin-combobox',
    elementClass:
        resolveElementClass<typeof DaikinComboboxWebComponent>('daikin-combobox'),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});

export const DaikinDatePicker = createComponent({
    tagName: 'daikin-date-picker',
    elementClass:
        resolveElementClass<typeof DaikinDatePickerWebComponent>('daikin-date-picker'),
    react: React,
    events: {
        onSelect: 'select'
    }
});

export const DaikinDropdown = createComponent({
    tagName: 'daikin-dropdown',
    elementClass:
        resolveElementClass<typeof DaikinDropdownWebComponent>('daikin-dropdown'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinDropdownItem = createComponent({
    tagName: 'daikin-dropdown-item',
    elementClass:
        resolveElementClass<typeof DaikinDropdownItemWebComponent>(
            'daikin-dropdown-item'
        ),
    react: React,
    events: {
        onSelect: 'select'
    }
});

export const DaikinIcon = createComponent({
    tagName: 'daikin-icon',
    elementClass: resolveElementClass<typeof DaikinIconWebComponent>('daikin-icon'),
    react: React
});

export const DaikinIconButton = createComponent({
    tagName: 'daikin-icon-button',
    elementClass:
        resolveElementClass<typeof DaikinIconButtonWebComponent>('daikin-icon-button'),
    react: React,
    events: {
        onClick: 'click'
    }
});

export const DaikinInlineNotification = createComponent({
    tagName: 'daikin-inline-notification',
    elementClass: resolveElementClass<typeof DaikinInlineNotificationWebComponent>(
        'daikin-inline-notification'
    ),
    react: React,
    events: {
        onClose: 'close'
    }
});

export const DaikinInputGroup = createComponent({
    tagName: 'daikin-input-group',
    elementClass:
        resolveElementClass<typeof DaikinInputGroupWebComponent>('daikin-input-group'),
    react: React
});

export const DaikinLink = createComponent({
    tagName: 'daikin-link',
    elementClass: resolveElementClass<typeof DaikinLinkWebComponent>('daikin-link'),
    react: React
});

export const DaikinList = createComponent({
    tagName: 'daikin-list',
    elementClass: resolveElementClass<typeof DaikinListWebComponent>('daikin-list'),
    react: React
});

export const DaikinListItem = createComponent({
    tagName: 'daikin-list-item',
    elementClass:
        resolveElementClass<typeof DaikinListItemWebComponent>('daikin-list-item'),
    react: React,
    events: {
        onClick: 'click'
    }
});

export const DaikinLoading = createComponent({
    tagName: 'daikin-loading',
    elementClass: resolveElementClass<typeof DaikinLoadingWebComponent>('daikin-loading'),
    react: React
});

export const DaikinLogo = createComponent({
    tagName: 'daikin-logo',
    elementClass: resolveElementClass<typeof DaikinLogoWebComponent>('daikin-logo'),
    react: React
});

// export const DaikinMenu = createComponent({
//     tagName: 'daikin-menu',
//     elementClass: resolveElementClass<typeof DaikinMenuWebComponent>('daikin-menu'),
//     react: React,
//     events: {
//         onBeforeToggle: 'beforetoggle',
//         onToggle: 'toggle'
//     }
// });

export const DaikinModal = createComponent({
    tagName: 'daikin-modal',
    elementClass: resolveElementClass<typeof DaikinModalWebComponent>('daikin-modal'),
    react: React,
    events: {
        onClose: 'close'
    }
});

export const DaikinModalFooter = createComponent({
    tagName: 'daikin-modal-footer',
    elementClass:
        resolveElementClass<typeof DaikinModalFooterWebComponent>('daikin-modal-footer'),
    react: React
});

export const DaikinModalHeader = createComponent({
    tagName: 'daikin-modal-header',
    elementClass:
        resolveElementClass<typeof DaikinModalHeaderWebComponent>('daikin-modal-header'),
    react: React
});

export const DaikinPagination = createComponent({
    tagName: 'daikin-pagination',
    elementClass:
        resolveElementClass<typeof DaikinPaginationWebComponent>('daikin-pagination'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinProgressBar = createComponent({
    tagName: 'daikin-progress-bar',
    elementClass:
        resolveElementClass<typeof DaikinProgressBarWebComponent>('daikin-progress-bar'),
    react: React
});

export const DaikinProgressIndicator = createComponent({
    tagName: 'daikin-progress-indicator',
    elementClass: resolveElementClass<typeof DaikinProgressIndicatorWebComponent>(
        'daikin-progress-indicator'
    ),
    react: React
});

export const DaikinProgressIndicatorItem = createComponent({
    tagName: 'daikin-progress-indicator-item',
    elementClass: resolveElementClass<typeof DaikinProgressIndicatorItemWebComponent>(
        'daikin-progress-indicator-item'
    ),
    react: React
});

export const DaikinRadio = createComponent({
    tagName: 'daikin-radio',
    elementClass: resolveElementClass<typeof DaikinRadioWebComponent>('daikin-radio'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinRadioGroup = createComponent({
    tagName: 'daikin-radio-group',
    elementClass:
        resolveElementClass<typeof DaikinRadioGroupWebComponent>('daikin-radio-group'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinSelect = createComponent({
    tagName: 'daikin-select',
    elementClass: resolveElementClass<typeof DaikinSelectWebComponent>('daikin-select'),
    react: React
});

export const DaikinSlider = createComponent({
    tagName: 'daikin-slider',
    elementClass: resolveElementClass<typeof DaikinSliderWebComponent>('daikin-slider'),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});

export const DaikinTab = createComponent({
    tagName: 'daikin-tab',
    elementClass: resolveElementClass<typeof DaikinTabWebComponent>('daikin-tab'),
    react: React,
    events: {
        onClick: 'click'
    }
});

export const DaikinTabPanels = createComponent({
    tagName: 'daikin-tab-panels',
    elementClass:
        resolveElementClass<typeof DaikinTabPanelsWebComponent>('daikin-tab-panels'),
    react: React
});

export const DaikinTable = createComponent({
    tagName: 'daikin-table',
    elementClass: resolveElementClass<typeof DaikinTableWebComponent>('daikin-table'),
    react: React,
    events: {
        onChangeCheck: 'change-check',
        onChangeSort: 'change-sort'
    }
});

export const DaikinTableCell = createComponent({
    tagName: 'daikin-table-cell',
    elementClass:
        resolveElementClass<typeof DaikinTableCellWebComponent>('daikin-table-cell'),
    react: React
});

export const DaikinTableHeaderCell = createComponent({
    tagName: 'daikin-table-header-cell',
    elementClass: resolveElementClass<typeof DaikinTableHeaderCellWebComponent>(
        'daikin-table-header-cell'
    ),
    react: React,
    events: {
        onChangeSort: 'change-sort'
    }
});

export const DaikinTabs = createComponent({
    tagName: 'daikin-tabs',
    elementClass: resolveElementClass<typeof DaikinTabsWebComponent>('daikin-tabs'),
    react: React,
    events: {
        onBeforeChange: 'beforechange',
        onChange: 'change'
    }
});

export const DaikinTextArea = createComponent({
    tagName: 'daikin-text-area',
    elementClass:
        resolveElementClass<typeof DaikinTextAreaWebComponent>('daikin-text-area'),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});

export const DaikinTextField = createComponent({
    tagName: 'daikin-text-field',
    elementClass:
        resolveElementClass<typeof DaikinTextFieldWebComponent>('daikin-text-field'),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input',
        onToggle: 'toggle'
    }
});

export const DaikinTextMaskedField = createComponent({
    tagName: 'daikin-text-masked-field',
    elementClass: resolveElementClass<typeof DaikinTextMaskedFieldWebComponent>(
        'daikin-text-masked-field'
    ),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});

export const DaikinTimePicker = createComponent({
    tagName: 'daikin-time-picker',
    elementClass:
        resolveElementClass<typeof DaikinTimePickerWebComponent>('daikin-time-picker'),
    react: React,
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});

export const DaikinToastNotification = createComponent({
    tagName: 'daikin-toast-notification',
    elementClass: resolveElementClass<typeof DaikinToastNotificationWebComponent>(
        'daikin-toast-notification'
    ),
    react: React,
    events: {
        onClose: 'close'
    }
});

export const DaikinToastNotificationManager = createComponent({
    tagName: 'daikin-toast-notification-manager',
    elementClass: resolveElementClass<typeof DaikinToastNotificationManagerWebComponent>(
        'daikin-toast-notification-manager'
    ),
    react: React,
    events: {
        onClose: 'close'
    }
});

export const DaikinToggle = createComponent({
    tagName: 'daikin-toggle',
    elementClass: resolveElementClass<typeof DaikinToggleWebComponent>('daikin-toggle'),
    react: React,
    events: {
        onChange: 'change'
    }
});

export const DaikinTooltip = createComponent({
    tagName: 'daikin-tooltip',
    elementClass: resolveElementClass<typeof DaikinTooltipWebComponent>('daikin-tooltip'),
    react: React,
    events: {
        onBeforeToggle: 'beforetoggle',
        onToggle: 'toggle'
    }
});

export const DaikinTree = createComponent({
    tagName: 'daikin-tree',
    elementClass: resolveElementClass<typeof DaikinTreeWebComponent>('daikin-tree'),
    react: React
});

export const DaikinTreeItem = createComponent({
    tagName: 'daikin-tree-item',
    elementClass:
        resolveElementClass<typeof DaikinTreeItemWebComponent>('daikin-tree-item'),
    react: React,
    events: {
        onClick: 'click',
        onTreeMoveFocus: 'tree-move-focus'
    }
});

export const DaikinTreeSection = createComponent({
    tagName: 'daikin-tree-section',
    elementClass:
        resolveElementClass<typeof DaikinTreeSectionWebComponent>('daikin-tree-section'),
    react: React,
    events: {
        onToggle: 'toggle',
        onTreeMoveFocus: 'tree-move-focus'
    }
});
