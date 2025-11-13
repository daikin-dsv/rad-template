import type { TextBundle } from './types';

const en: TextBundle = {
    appRoutes: {
        home: 'Home',
        componentGallery: 'Component Gallery'
    },
    footer: {
        copyright: '2025 Daikin Open Innovation Lab Silicon Valley'
    },
    user: {
        email: 'Email',
        english: 'English',
        japanese: '日本語',
        language: 'Language',
        manageAccount: 'Manage Account',
        name: 'Name',
        profile: 'Profile',
        settings: 'Settings',
        signedIn: 'Signed in as',
        signOut: 'Sign out'
    },
    componentGallery: {
        intro: {
            eyebrow: 'Design System',
            title: 'Daikin component gallery',
            descriptionPrefix: 'Every sample below uses the React wrappers exported from',
            descriptionSuffix: 'so you can copy/paste the markup into your own features.',
            codePath: 'app/components/dds-wrappers.tsx'
        },
        sections: {
            layoutNavigation: {
                title: 'Layout & navigation',
                description:
                    'Structure entire flows with accordions, breadcrumbs, tabs, trees, carousels, and contextual menus.'
            },
            contentDisplay: {
                title: 'Content & display',
                description:
                    'Use cards, lists, data tables, brand assets, and tooltips to present information consistently.'
            },
            inputsControls: {
                title: 'Inputs & controls',
                description:
                    'Buttons, forms, select controls, masked fields, and schedulers share the same tokens.'
            },
            feedbackStatus: {
                title: 'Feedback & status',
                description:
                    'Communicate progress, alerts, async work, and overlays.'
            }
        },
        cards: {
            accordion: {
                name: 'Accordion',
                description: 'Stack troubleshooting details by topic.',
                energyTitle: 'Energy usage',
                energyBody: 'Track kWh savings against last month.',
                alertsTitle: 'Active alerts',
                alertsBody: 'Review what needs a technician follow-up.'
            },
            breadcrumbs: {
                name: 'Breadcrumbs',
                description:
                    'Give users awareness of where they are inside multi-level flows.',
                crumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Sites', href: '/sites' },
                    { label: 'HQ West', variant: 'current' }
                ]
            },
            tabsPanels: {
                name: 'Tabs & panels',
                description:
                    'Switch between top-level insights with daikin-tabs + daikin-tab-panels.',
                tabs: [
                    {
                        value: 'overview',
                        label: 'Overview',
                        panel: 'Real-time KPIs for every facility.'
                    },
                    {
                        value: 'alerts',
                        label: 'Alerts',
                        panel: 'Outstanding issues prioritized by impact.'
                    },
                    {
                        value: 'reports',
                        label: 'Reports',
                        panel: 'Export compliance summaries and service logs.'
                    }
                ]
            },
            pagination: {
                name: 'Pagination',
                description: 'Paginate long result sets.'
            },
            carousel: {
                name: 'Carousel',
                description: 'Rotate through promotional content or learning cards.',
                slides: [
                    {
                        title: 'Quiet mode',
                        description: 'Ideal for shared workspaces',
                        body: 'Keep acoustics low during the workday with a single tap.'
                    },
                    {
                        title: 'Eco schedule',
                        description: 'Balance comfort and cost',
                        body: 'Automate nighttime setbacks for every building in the fleet.'
                    }
                ]
            },
            contextualMenu: {
                name: 'Contextual menu',
                description: 'Attach quick actions to any button.',
                buttonLabel: 'Site actions',
                options: [
                    { label: 'Schedule visit', icon: 'i-daikin-calendar' },
                    { label: 'New alert', icon: 'i-daikin-warning' },
                    {
                        label: 'Reassign owner',
                        icon: 'i-daikin-information',
                        disabled: true
                    }
                ]
            },
            tree: {
                name: 'Tree navigation',
                description: 'Expose hierarchical sites or equipment.',
                groups: [
                    {
                        label: 'North America',
                        value: 'north-america',
                        open: true,
                        items: [
                            { label: 'Chicago HQ', value: 'chicago', selected: true },
                            { label: 'Austin Training Center', value: 'austin' }
                        ]
                    },
                    {
                        label: 'EMEA',
                        value: 'emea',
                        items: [{ label: 'Berlin Lab', value: 'berlin' }]
                    }
                ]
            },
            cardLayout: {
                name: 'Card layout',
                description: 'Combine daikin-card with header/footer helpers.',
                headerTitle: 'Seasonal check',
                headerDescription: 'Next visit · 24 Apr',
                body: [
                    'Verify economizer dampers and refresh filter sets.',
                    'Assign the visit to a Comfort Pro partner.'
                ],
                dismiss: 'Dismiss',
                viewDetails: 'View details'
            },
            navigationList: {
                name: 'Navigation list',
                description: 'Mix text, links, and icons inside daikin-list.',
                items: [
                    {
                        icon: 'i-daikin-check',
                        text: 'Last service · 32 days ago'
                    },
                    {
                        icon: 'i-daikin-information',
                        text: 'Visit documentation',
                        href: 'https://www.daikin.com'
                    },
                    {
                        icon: 'i-daikin-warning',
                        text: 'Pending approval',
                        disabled: true
                    }
                ]
            },
            dataTable: {
                name: 'Data table',
                description:
                    'Bind JSON data to daikin-table and override slots for cells or headers.',
                headers: {
                    zone: 'Zone',
                    status: 'Status',
                    temp: 'Temp (°F)'
                },
                rows: [
                    { id: 'lobby', zone: 'Lobby', status: 'Cooling', temp: '68°F' },
                    { id: 'lab', zone: 'R&D Lab', status: 'Standby', temp: '72°F' },
                    { id: 'west', zone: 'HQ West', status: 'Heating', temp: '70°F' }
                ],
                highlightedRowId: 'lobby',
                highlightedStatus: 'Cooling'
            },
            brandIdentity: {
                name: 'Brand & identity',
                description: 'Built-in avatar, logo, link, and icon components.',
                avatarAlt: 'Alex Rivera',
                linkText: 'Account preferences',
                linkHref: 'https://www.daikin.com',
                logoAriaLabel: 'Daikin brand icon'
            },
            tooltip: {
                name: 'Tooltip',
                description: 'Wrap any trigger with daikin-tooltip for contextual help.',
                body: 'Switch the unit into eco mode during low occupancy hours.'
            },
            buttons: {
                name: 'Buttons',
                description: 'Use button slots for icons or upgrade to icon-only buttons.',
                primary: 'Schedule visit',
                secondary: 'View site'
            },
            selectionControls: {
                name: 'Selection controls',
                description: 'Combine checkboxes, radios, toggles, and chips for filtering.',
                soloCheckbox: 'Email technicians on failure',
                groupedCheckboxes: ['Cooling', 'Heating', 'Ventilation'],
                radioOptions: ['Auto', 'Manual', 'Standby'],
                toggleLabel: 'Enable eco schedule',
                chips: [
                    { label: 'Critical only', aria: 'Filter for critical items' },
                    { label: 'Scheduled visits', aria: 'Filter for scheduled visits' }
                ]
            },
            adjustments: {
                name: 'Adjustments',
                description: 'Sliders provide fine-grained numeric control.',
                sliderAriaLabel: 'Desired temperature'
            },
            comboboxDropdown: {
                name: 'Combobox & dropdown',
                description:
                    'Use combobox for searchable text input and dropdown for curated lists.',
                comboboxPlaceholder: 'Mode',
                comboboxItems: [
                    'Cooling',
                    'Heating',
                    { label: 'Ventilation', disabled: true },
                    'Energy recovery'
                ],
                dropdownPlaceholder: 'Regions',
                dropdownOptions: [
                    { label: 'North Campus', value: 'north' },
                    { label: 'East Campus', value: 'east' },
                    { label: 'South Campus', value: 'south' }
                ],
                selectedValues: ['north', 'east']
            },
            select: {
                name: 'Select',
                description: 'Wrap native select elements.',
                defaultValue: 'standard',
                options: [
                    { value: 'standard', label: 'Standard installation' },
                    { value: 'premium', label: 'Premium commissioning' },
                    { value: 'economy', label: 'Economy visit' }
                ]
            },
            textInputs: {
                name: 'Text inputs',
                description: 'Single-line inputs plus masked formats.',
                projectPlaceholder: 'Project name',
                passwordPlaceholder: 'Portal password',
                serialPlaceholder: 'Serial number'
            },
            dateTime: {
                name: 'Date & time',
                description:
                    'Use date picker, time picker, and calendar interchangeably.',
                datePlaceholder: 'Start date'
            },
            inlineNotification: {
                name: 'Inline notification',
                description: 'Use inline banners for permanent page-level alerts.',
                title: 'Filter replacement',
                body: 'Filter life is below 10% for HQ West.'
            },
            toastNotification: {
                name: 'Toast notification',
                description: 'Transient alert that dismisses after a duration.',
                title: 'Schedule saved',
                body: 'The new program is live for every rooftop unit.'
            },
            toastManager: {
                name: 'Toast manager',
                description: 'Stack multiple toasts in one corner.',
                showLabel: 'Show sample toasts',
                hideLabel: 'Hide sample toasts',
                hint: 'Click the button to preview stacked notifications.',
                toasts: [
                    {
                        title: 'Technician assigned',
                        body: 'Taylor is en route to HQ West.',
                        status: 'positive'
                    },
                    {
                        title: 'Inventory low',
                        body: 'Only 4 spare filters remain on truck 12.',
                        status: 'warning'
                    }
                ]
            },
            progress: {
                name: 'Progress',
                description: 'Pair progress bars with guided steps.',
                helper: '3 / 5 onboarding tasks complete',
                label: 'Onboarding progress',
                steps: [
                    {
                        title: 'Site survey',
                        description: 'Photos uploaded',
                        status: 'finished'
                    },
                    {
                        title: 'Commissioning',
                        description: '2 of 4 units done',
                        status: 'inprogress'
                    },
                    {
                        title: 'Handover',
                        status: 'unfinished'
                    }
                ]
            },
            loading: {
                name: 'Loading',
                description: 'Show loading states that match the brand.'
            },
            modal: {
                name: 'Modal',
                description: 'Layer blocking dialogs over the experience.',
                openButton: 'Launch modal',
                title: 'Publish schedule',
                headerDescription: 'Review timing before notifying teams.',
                body: 'Eco setback will begin at 9:30 PM for all office zones. Notify the Chicago and Austin teams?',
                cancel: 'Cancel',
                confirm: 'Publish'
            }
        }
    }
};

export default en;
