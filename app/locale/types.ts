export type AppRoutesText = Record<string, string>;
type FooterText = {
    copyright: string;
};

export type UserText = {
    email: string;
    english: string;
    japanese: string;
    language: string;
    manageAccount: string;
    name: string;
    profile: string;
    settings: string;
    signedIn: string;
    signOut: string;
};

type SectionText = {
    title: string;
    description: string;
};

type ComponentGalleryCardBase = {
    name: string;
    description: string;
};

type BreadcrumbCopy = {
    label: string;
    href?: string;
    variant?: 'current';
};

type CarouselSlideCopy = {
    title: string;
    description: string;
    body: string;
};

type ContextualMenuOption = {
    label: string;
    icon: string;
    disabled?: boolean;
};

type TreeGroupCopy = {
    label: string;
    value: string;
    open?: boolean;
    items: {
        label: string;
        value: string;
        selected?: boolean;
    }[];
};

type NavigationListItemCopy = {
    icon: string;
    text: string;
    href?: string;
    disabled?: boolean;
};

type ComponentGalleryTableRow = {
    id: string;
    zone: string;
    status: string;
    temp: string;
};

type ComponentGalleryChip = {
    label: string;
    aria: string;
};

type ComponentGalleryComboboxItem = string | { label: string; disabled?: boolean };

type ComponentGalleryDropdownOption = {
    label: string;
    value: string;
};

type SelectOption = {
    value: string;
    label: string;
};

type ToastCopy = {
    title: string;
    body: string;
    status: 'positive' | 'warning' | 'negative' | 'information' | 'alarm';
};

type ProgressStepCopy = {
    title: string;
    description?: string;
    status: 'finished' | 'inprogress' | 'unfinished';
};

export type ComponentGalleryText = {
    intro: {
        eyebrow: string;
        title: string;
        descriptionPrefix: string;
        descriptionSuffix: string;
        codePath: string;
    };
    sections: {
        layoutNavigation: SectionText;
        contentDisplay: SectionText;
        inputsControls: SectionText;
        feedbackStatus: SectionText;
    };
    cards: {
        accordion: ComponentGalleryCardBase & {
            energyTitle: string;
            energyBody: string;
            alertsTitle: string;
            alertsBody: string;
        };
        breadcrumbs: ComponentGalleryCardBase & {
            crumbs: BreadcrumbCopy[];
        };
        tabsPanels: ComponentGalleryCardBase & {
            tabs: {
                value: string;
                label: string;
                panel: string;
            }[];
        };
        pagination: ComponentGalleryCardBase;
        carousel: ComponentGalleryCardBase & {
            slides: CarouselSlideCopy[];
        };
        contextualMenu: ComponentGalleryCardBase & {
            buttonLabel: string;
            options: ContextualMenuOption[];
        };
        tree: ComponentGalleryCardBase & {
            groups: TreeGroupCopy[];
        };
        cardLayout: ComponentGalleryCardBase & {
            headerTitle: string;
            headerDescription: string;
            body: string[];
            dismiss: string;
            viewDetails: string;
        };
        navigationList: ComponentGalleryCardBase & {
            items: NavigationListItemCopy[];
        };
        dataTable: ComponentGalleryCardBase & {
            headers: {
                zone: string;
                status: string;
                temp: string;
            };
            rows: ComponentGalleryTableRow[];
            highlightedRowId: string;
            highlightedStatus: string;
        };
        brandIdentity: ComponentGalleryCardBase & {
            avatarAlt: string;
            linkText: string;
            linkHref: string;
            logoAriaLabel: string;
        };
        tooltip: ComponentGalleryCardBase & {
            body: string;
        };
        buttons: ComponentGalleryCardBase & {
            primary: string;
            secondary: string;
        };
        selectionControls: ComponentGalleryCardBase & {
            soloCheckbox: string;
            groupedCheckboxes: string[];
            radioOptions: string[];
            toggleLabel: string;
            chips: ComponentGalleryChip[];
        };
        adjustments: ComponentGalleryCardBase & {
            sliderAriaLabel: string;
        };
        comboboxDropdown: ComponentGalleryCardBase & {
            comboboxPlaceholder: string;
            comboboxItems: ComponentGalleryComboboxItem[];
            dropdownPlaceholder: string;
            dropdownOptions: ComponentGalleryDropdownOption[];
            selectedValues: string[];
        };
        select: ComponentGalleryCardBase & {
            defaultValue: string;
            options: SelectOption[];
        };
        textInputs: ComponentGalleryCardBase & {
            projectPlaceholder: string;
            passwordPlaceholder: string;
            serialPlaceholder: string;
        };
        dateTime: ComponentGalleryCardBase & {
            datePlaceholder: string;
        };
        inlineNotification: ComponentGalleryCardBase & {
            title: string;
            body: string;
        };
        toastNotification: ComponentGalleryCardBase & {
            title: string;
            body: string;
        };
        toastManager: ComponentGalleryCardBase & {
            showLabel: string;
            hideLabel: string;
            hint: string;
            toasts: ToastCopy[];
        };
        progress: ComponentGalleryCardBase & {
            helper: string;
            label: string;
            steps: ProgressStepCopy[];
        };
        loading: ComponentGalleryCardBase;
        modal: ComponentGalleryCardBase & {
            openButton: string;
            title: string;
            headerDescription: string;
            body: string;
            cancel: string;
            confirm: string;
        };
    };
};

export type TextBundle = {
    appRoutes: AppRoutesText;
    footer: FooterText;
    user: UserText;
    componentGallery: ComponentGalleryText;
};

export type SupportedLocale = 'en' | 'ja';
