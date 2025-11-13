'use client';

import { useMemo, useState, type ReactNode } from 'react';

import {
    DaikinAccordion,
    DaikinAccordionItem,
    DaikinAvatar,
    DaikinBreadcrumb,
    DaikinBreadcrumbItem,
    DaikinButton,
    DaikinCalendar,
    DaikinCard,
    DaikinCardFooter,
    DaikinCardHeader,
    DaikinCarousel,
    DaikinCarouselItem,
    DaikinCheckbox,
    DaikinCheckboxGroup,
    DaikinChip,
    DaikinCombobox,
    DaikinDatePicker,
    DaikinDropdown,
    DaikinDropdownItem,
    DaikinIcon,
    DaikinIconButton,
    DaikinInlineNotification,
    DaikinLink,
    DaikinList,
    DaikinListItem,
    DaikinLoading,
    DaikinLogo,
    DaikinModal,
    DaikinModalFooter,
    DaikinModalHeader,
    DaikinPagination,
    DaikinProgressBar,
    DaikinProgressIndicator,
    DaikinProgressIndicatorItem,
    DaikinRadio,
    DaikinRadioGroup,
    DaikinSelect,
    DaikinSlider,
    DaikinTab,
    DaikinTabPanels,
    DaikinTable,
    DaikinTableCell,
    DaikinTableHeaderCell,
    DaikinTabs,
    DaikinTextField,
    DaikinTextMaskedField,
    DaikinTimePicker,
    DaikinToastNotification,
    DaikinToastNotificationManager,
    DaikinToggle,
    DaikinTooltip,
    DaikinTree,
    DaikinTreeItem,
    DaikinTreeSection
} from '../components/dds-wrappers';
import type { ComponentGalleryText } from '../locale/types';

type HvacRow = {
    id: string;
    zone: string;
    status: string;
    temp: string;
};

type ComponentGalleryClientProps = {
    copy: ComponentGalleryText;
};

export default function ComponentGalleryClient({ copy }: ComponentGalleryClientProps) {
    const {
        intro,
        sections,
        cards: {
            accordion,
            breadcrumbs,
            tabsPanels,
            pagination,
            carousel,
            contextualMenu,
            tree,
            cardLayout,
            navigationList,
            dataTable,
            brandIdentity,
            tooltip,
            buttons,
            selectionControls,
            adjustments,
            comboboxDropdown,
            select,
            textInputs,
            dateTime,
            inlineNotification,
            toastNotification,
            toastManager,
            progress,
            loading,
            modal
        }
    } = copy;

    const toastTimestamp = useMemo(() => new Date(), []);
    const [isToastManagerActive, setToastManagerActive] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const dropdownOptions = comboboxDropdown.dropdownOptions;
    const selectedRegions = comboboxDropdown.selectedValues;
    const comboboxItems = comboboxDropdown.comboboxItems;

    const hvacTableHeaders: {
        key: keyof Omit<HvacRow, 'id'>;
        label: string;
        alignment?: 'left' | 'center' | 'right';
        sortable: boolean;
    }[] = [
        { key: 'zone', label: dataTable.headers.zone, sortable: true },
        { key: 'status', label: dataTable.headers.status, sortable: true },
        {
            key: 'temp',
            label: dataTable.headers.temp,
            alignment: 'right',
            sortable: true
        }
    ];

    const hvacTableRows: HvacRow[] = dataTable.rows;

    const toDateInputValue = (date: Date) => {
        const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
        return local.toISOString().split('T')[0];
    };

    const today = useMemo(() => new Date(), []);
    const defaultDateValue = toDateInputValue(today);
    const minDate = useMemo(() => {
        const value = new Date(today);
        value.setMonth(value.getMonth() - 1);
        return value;
    }, [today]);
    const maxDate = useMemo(() => {
        const value = new Date(today);
        value.setMonth(value.getMonth() + 3);
        return value;
    }, [today]);

    const minDateValue = toDateInputValue(minDate);
    const maxDateValue = toDateInputValue(maxDate);

    return (
        <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col gap-10 pb-16">
            <header className="space-y-3">
                <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    {intro.eyebrow}
                </p>
                <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
                    {intro.title}
                </h1>
                <p className="text-base text-slate-600 dark:text-slate-300">
                    {intro.descriptionPrefix}{' '}
                    <code className="rounded bg-slate-100 px-1 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                        {intro.codePath}
                    </code>{' '}
                    {intro.descriptionSuffix}
                </p>
            </header>

            <section className="space-y-4">
                <SectionHeading
                    title={sections.layoutNavigation.title}
                    description={sections.layoutNavigation.description}
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    <ComponentCard
                        name={accordion.name}
                        description={accordion.description}
                    >
                        <DaikinAccordion exclusive>
                            <DaikinAccordionItem name="energy" open>
                                <span slot="summary">{accordion.energyTitle}</span>
                                <p className="mt-2 text-sm text-slate-600">
                                    {accordion.energyBody}
                                </p>
                            </DaikinAccordionItem>
                            <DaikinAccordionItem name="alerts">
                                <span slot="summary">{accordion.alertsTitle}</span>
                                <p className="mt-2 text-sm text-slate-600">
                                    {accordion.alertsBody}
                                </p>
                            </DaikinAccordionItem>
                        </DaikinAccordion>
                    </ComponentCard>

                    <ComponentCard
                        name={breadcrumbs.name}
                        description={breadcrumbs.description}
                    >
                        <DaikinBreadcrumb showVisited>
                            {breadcrumbs.crumbs.map((crumb) => (
                                <DaikinBreadcrumbItem
                                    key={crumb.label}
                                    href={crumb.href}
                                    variant={crumb.variant}
                                >
                                    {crumb.label}
                                </DaikinBreadcrumbItem>
                            ))}
                        </DaikinBreadcrumb>
                    </ComponentCard>

                    <ComponentCard
                        name={tabsPanels.name}
                        description={tabsPanels.description}
                    >
                        <DaikinTabs
                            value={tabsPanels.tabs[0]?.value ?? ''}
                            sizing="stretch"
                        >
                            {tabsPanels.tabs.map((tab, index) => (
                                <DaikinTab
                                    key={tab.value}
                                    value={tab.value}
                                    active={index === 0}
                                >
                                    {tab.label}
                                </DaikinTab>
                            ))}
                            <DaikinTabPanels
                                slot="panels"
                                value={tabsPanels.tabs[0]?.value ?? ''}
                            >
                                {tabsPanels.tabs.map((tab) => (
                                    <div
                                        key={tab.value}
                                        slot={`panel:${tab.value}`}
                                        className="rounded-md border border-slate-200 p-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
                                    >
                                        {tab.panel}
                                    </div>
                                ))}
                            </DaikinTabPanels>
                        </DaikinTabs>
                    </ComponentCard>

                    <ComponentCard
                        name={pagination.name}
                        description={pagination.description}
                    >
                        <DaikinPagination current={3} total={12} window={5} />
                    </ComponentCard>

                    <ComponentCard
                        name={carousel.name}
                        description={carousel.description}
                    >
                        <DaikinCarousel currentIndex={0}>
                            {carousel.slides.map((slide, index) => (
                                <DaikinCarouselItem
                                    key={slide.title}
                                    label={slide.title}
                                    active={index === 0}
                                >
                                    <span
                                        slot="title"
                                        className="text-base font-semibold"
                                    >
                                        {slide.title}
                                    </span>
                                    <span
                                        slot="description"
                                        className="text-sm text-slate-500"
                                    >
                                        {slide.description}
                                    </span>
                                    <div className="mt-2 text-sm text-slate-600">
                                        {slide.body}
                                    </div>
                                </DaikinCarouselItem>
                            ))}
                        </DaikinCarousel>
                    </ComponentCard>

                    <ComponentCard
                        name={contextualMenu.name}
                        description={contextualMenu.description}
                    >
                        <div className="flex flex-col gap-3">
                            <DaikinButton size="small" variant="outline">
                                {contextualMenu.buttonLabel}
                            </DaikinButton>
                            <DaikinList listRole="menu">
                                {contextualMenu.options.map((option) => (
                                    <DaikinListItem
                                        key={option.label}
                                        type="button"
                                        disabled={option.disabled}
                                    >
                                        <span slot="left-icon" className={option.icon} />
                                        {option.label}
                                    </DaikinListItem>
                                ))}
                            </DaikinList>
                        </div>
                    </ComponentCard>

                    <ComponentCard name={tree.name} description={tree.description}>
                        <DaikinTree selectable>
                            {tree.groups.map((group) => (
                                <DaikinTreeSection
                                    key={group.value}
                                    value={group.value}
                                    open={group.open}
                                >
                                    <span slot="label">{group.label}</span>
                                    {group.items.map((item) => (
                                        <DaikinTreeItem
                                            key={item.value}
                                            value={item.value}
                                            selected={item.selected}
                                        >
                                            {item.label}
                                        </DaikinTreeItem>
                                    ))}
                                </DaikinTreeSection>
                            ))}
                        </DaikinTree>
                    </ComponentCard>
                </div>
            </section>

            <section className="space-y-4">
                <SectionHeading
                    title={sections.contentDisplay.title}
                    description={sections.contentDisplay.description}
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    <ComponentCard
                        name={cardLayout.name}
                        description={cardLayout.description}
                    >
                        <DaikinCard outline>
                            <DaikinCardHeader>
                                <DaikinIcon slot="left-icon" icon="calendar" size="s" />
                                {cardLayout.headerTitle}
                                <span slot="description">
                                    {cardLayout.headerDescription}
                                </span>
                            </DaikinCardHeader>
                            <div className="space-y-2 px-4 py-3 text-sm text-slate-600">
                                {cardLayout.body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            <DaikinCardFooter>
                                <DaikinButton size="small" variant="ghost">
                                    {cardLayout.dismiss}
                                </DaikinButton>
                                <DaikinButton size="small">
                                    {cardLayout.viewDetails}
                                </DaikinButton>
                            </DaikinCardFooter>
                        </DaikinCard>
                    </ComponentCard>

                    <ComponentCard
                        name={navigationList.name}
                        description={navigationList.description}
                    >
                        <DaikinList listRole="list">
                            {navigationList.items.map((item) => (
                                <DaikinListItem
                                    key={item.text}
                                    type={item.href ? 'link' : 'text'}
                                    href={item.href}
                                    disabled={item.disabled}
                                >
                                    <span slot="left-icon" className={item.icon} />
                                    {item.text}
                                </DaikinListItem>
                            ))}
                        </DaikinList>
                    </ComponentCard>

                    <ComponentCard
                        name={dataTable.name}
                        description={dataTable.description}
                    >
                        <DaikinTable
                            headers={hvacTableHeaders}
                            rows={hvacTableRows}
                            selectable
                            selection={[dataTable.highlightedRowId]}
                            sortable
                            sort="zone"
                            order="asc"
                        >
                            <DaikinTableHeaderCell
                                slot="header:temp"
                                alignment="right"
                                sortable
                                order="asc"
                            >
                                {dataTable.headers.temp}
                            </DaikinTableHeaderCell>
                            <DaikinTableCell
                                slot={`cell:${dataTable.highlightedRowId}:status`}
                            >
                                <span className="font-medium text-emerald-600">
                                    {dataTable.highlightedStatus}
                                </span>
                            </DaikinTableCell>
                        </DaikinTable>
                    </ComponentCard>

                    <ComponentCard
                        name={brandIdentity.name}
                        description={brandIdentity.description}
                    >
                        <div className="flex flex-wrap items-center gap-4">
                            <DaikinAvatar
                                type="button"
                                alt={brandIdentity.avatarAlt}
                                avatarAriaHaspopup="menu"
                            />
                            <DaikinLink href={brandIdentity.linkHref} showVisited>
                                {brandIdentity.linkText}
                            </DaikinLink>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <DaikinLogo
                                logoAriaLabel={brandIdentity.logoAriaLabel}
                                mode="positive"
                            />
                            <DaikinIcon icon="information" size="xl" />
                        </div>
                    </ComponentCard>

                    <ComponentCard name={tooltip.name} description={tooltip.description}>
                        <DaikinTooltip placement="top" color="default">
                            <DaikinIconButton size="m" variant="ghost">
                                <DaikinIcon icon="information" size="m" />
                            </DaikinIconButton>
                            <span slot="description">{tooltip.body}</span>
                        </DaikinTooltip>
                    </ComponentCard>
                </div>
            </section>

            <section className="space-y-4">
                <SectionHeading
                    title={sections.inputsControls.title}
                    description={sections.inputsControls.description}
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    <ComponentCard name={buttons.name} description={buttons.description}>
                        <div className="flex flex-wrap gap-3">
                            <DaikinButton size="medium" variant="fill">
                                <DaikinIcon slot="left-icon" icon="calendar" size="s" />
                                {buttons.primary}
                            </DaikinButton>
                            <DaikinButton size="medium" variant="outline" color="default">
                                <DaikinIcon
                                    slot="right-icon"
                                    icon="chevron-right"
                                    size="s"
                                />
                                {buttons.secondary}
                            </DaikinButton>
                            <DaikinIconButton size="m" variant="ghost">
                                <DaikinIcon icon="close" size="m" />
                            </DaikinIconButton>
                        </div>
                    </ComponentCard>

                    <ComponentCard
                        name={selectionControls.name}
                        description={selectionControls.description}
                    >
                        <div className="flex flex-col gap-4">
                            <DaikinCheckbox checkState="checked">
                                {selectionControls.soloCheckbox}
                            </DaikinCheckbox>

                            <DaikinCheckboxGroup orientation="horizontal">
                                {selectionControls.groupedCheckboxes.map(
                                    (label, index) => (
                                        <DaikinCheckbox
                                            key={label}
                                            checkState={
                                                index === 0
                                                    ? 'checked'
                                                    : index === 2
                                                      ? 'indeterminate'
                                                      : 'unchecked'
                                            }
                                        >
                                            {label}
                                        </DaikinCheckbox>
                                    )
                                )}
                            </DaikinCheckboxGroup>

                            <DaikinRadioGroup name="mode" value="auto">
                                {selectionControls.radioOptions.map((label, index) => (
                                    <DaikinRadio
                                        key={label}
                                        value={`radio-${index}`}
                                        checked={index === 0}
                                    >
                                        {label}
                                    </DaikinRadio>
                                ))}
                            </DaikinRadioGroup>

                            <div className="flex items-center gap-3">
                                <DaikinToggle checked />
                                <span className="text-sm text-slate-600">
                                    {selectionControls.toggleLabel}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectionControls.chips.map((chip) => (
                                    <DaikinChip
                                        key={chip.label}
                                        chipAriaLabel={chip.aria}
                                    >
                                        {chip.label}
                                    </DaikinChip>
                                ))}
                            </div>
                        </div>
                    </ComponentCard>

                    <ComponentCard
                        name={adjustments.name}
                        description={adjustments.description}
                    >
                        <DaikinSlider
                            min="40"
                            max="80"
                            step="1"
                            value="68"
                            sliderAriaLabel={adjustments.sliderAriaLabel}
                        />
                    </ComponentCard>

                    <ComponentCard
                        name={comboboxDropdown.name}
                        description={comboboxDropdown.description}
                    >
                        <div className="flex flex-col gap-4">
                            <DaikinCombobox
                                placeholder={comboboxDropdown.comboboxPlaceholder}
                                items={comboboxItems}
                                required
                            />
                            <DaikinDropdown
                                placeholder={comboboxDropdown.dropdownPlaceholder}
                                multiple
                                maxLabels={2}
                                selectedOptions={selectedRegions}
                            >
                                {dropdownOptions.map(({ label, value }) => (
                                    <DaikinDropdownItem
                                        key={value}
                                        value={value}
                                        selectable
                                        selected={selectedRegions.includes(value)}
                                    >
                                        {label}
                                    </DaikinDropdownItem>
                                ))}
                            </DaikinDropdown>
                        </div>
                    </ComponentCard>

                    <ComponentCard name={select.name} description={select.description}>
                        <DaikinSelect required>
                            <select defaultValue={select.defaultValue}>
                                {select.options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </DaikinSelect>
                    </ComponentCard>

                    <ComponentCard
                        name={textInputs.name}
                        description={textInputs.description}
                    >
                        <div className="flex flex-col gap-3">
                            <DaikinTextField
                                placeholder={textInputs.projectPlaceholder}
                                required
                            />
                            <DaikinTextField
                                type="password"
                                placeholder={textInputs.passwordPlaceholder}
                                showPassword
                            />
                            <DaikinTextMaskedField
                                placeholder={textInputs.serialPlaceholder}
                                mask="00-0000-0000"
                            />
                        </div>
                    </ComponentCard>

                    <ComponentCard
                        name={dateTime.name}
                        description={dateTime.description}
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <DaikinDatePicker
                                placeholder={dateTime.datePlaceholder}
                                min={minDateValue}
                                max={maxDateValue}
                                defaultValue={defaultDateValue}
                            />
                            <DaikinTimePicker
                                value="13:30"
                                min="08:00"
                                max="18:00"
                                minutesStep="15"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <DaikinCalendar defaultValue={defaultDateValue} />
                        </div>
                    </ComponentCard>
                </div>
            </section>

            <section className="space-y-4">
                <SectionHeading
                    title={sections.feedbackStatus.title}
                    description={sections.feedbackStatus.description}
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    <ComponentCard
                        name={inlineNotification.name}
                        description={inlineNotification.description}
                    >
                        <DaikinInlineNotification
                            status="warning"
                            closable
                            layout="horizontal"
                            timestamp={toastTimestamp}
                        >
                            <span slot="title">{inlineNotification.title}</span>
                            {inlineNotification.body}
                        </DaikinInlineNotification>
                    </ComponentCard>

                    <ComponentCard
                        name={toastNotification.name}
                        description={toastNotification.description}
                    >
                        <DaikinToastNotification
                            name="toast-demo"
                            status="positive"
                            layout="horizontal"
                            closable
                            duration={6000}
                            timestamp={toastTimestamp}
                        >
                            <span slot="title">{toastNotification.title}</span>
                            {toastNotification.body}
                        </DaikinToastNotification>
                    </ComponentCard>

                    <ComponentCard
                        name={toastManager.name}
                        description={toastManager.description}
                    >
                        <div className="flex flex-col gap-3">
                            <DaikinButton
                                size="small"
                                variant="outline"
                                onClick={() => setToastManagerActive((prev) => !prev)}
                            >
                                {isToastManagerActive
                                    ? toastManager.hideLabel
                                    : toastManager.showLabel}
                            </DaikinButton>
                            {isToastManagerActive ? (
                                <DaikinToastNotificationManager position="bottom-right">
                                    {toastManager.toasts.map((toast, index) => (
                                        <DaikinToastNotification
                                            key={toast.title}
                                            name={`toast-${index}`}
                                            status={toast.status}
                                            closable
                                        >
                                            <span slot="title">{toast.title}</span>
                                            {toast.body}
                                        </DaikinToastNotification>
                                    ))}
                                </DaikinToastNotificationManager>
                            ) : (
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    {toastManager.hint}
                                </p>
                            )}
                        </div>
                    </ComponentCard>

                    <ComponentCard
                        name={progress.name}
                        description={progress.description}
                    >
                        <div className="flex flex-col gap-4">
                            <DaikinProgressBar
                                value={60}
                                max={100}
                                helper={progress.helper}
                            >
                                {progress.label}
                            </DaikinProgressBar>
                            <DaikinProgressIndicator currentItem={1}>
                                {progress.steps.map((step) => (
                                    <DaikinProgressIndicatorItem
                                        key={step.title}
                                        status={step.status}
                                    >
                                        {step.title}
                                        {step.description ? (
                                            <span slot="description">
                                                {step.description}
                                            </span>
                                        ) : null}
                                    </DaikinProgressIndicatorItem>
                                ))}
                            </DaikinProgressIndicator>
                        </div>
                    </ComponentCard>

                    <ComponentCard name={loading.name} description={loading.description}>
                        <div className="flex items-center gap-3">
                            <DaikinLoading size="small" />
                            <DaikinLoading background />
                        </div>
                    </ComponentCard>

                    <ComponentCard name={modal.name} description={modal.description}>
                        <div className="flex flex-col gap-3">
                            <DaikinButton size="small" onClick={() => setModalOpen(true)}>
                                {modal.openButton}
                            </DaikinButton>
                            <DaikinModal
                                open={isModalOpen}
                                modalRole="dialog"
                                onClose={() => setModalOpen(false)}
                            >
                                <DaikinModalHeader withCloseButton>
                                    {modal.title}
                                    <span slot="description">
                                        {modal.headerDescription}
                                    </span>
                                </DaikinModalHeader>
                                <div className="space-y-2 px-4 py-3 text-sm text-slate-600">
                                    <p>{modal.body}</p>
                                </div>
                                <DaikinModalFooter>
                                    <DaikinButton
                                        size="small"
                                        variant="ghost"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        {modal.cancel}
                                    </DaikinButton>
                                    <DaikinButton
                                        size="small"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        {modal.confirm}
                                    </DaikinButton>
                                </DaikinModalFooter>
                            </DaikinModal>
                        </div>
                    </ComponentCard>
                </div>
            </section>
        </div>
    );
}

type SectionHeadingProps = {
    title: string;
    description: string;
};

function SectionHeading({ title, description }: SectionHeadingProps) {
    return (
        <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                {title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
    );
}

type ComponentCardProps = {
    name: string;
    description: string;
    children: ReactNode;
};

function ComponentCard({ name, description, children }: ComponentCardProps) {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            </div>
            <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                {children}
            </div>
        </div>
    );
}
