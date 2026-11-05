// data.js - Database Konfigurasi Modul & Warna (Deklaratif)

const COLOR_PALETTE = {
    RED: '#E11D48',
    WHITE: '#F8FAFC',
    GREEN: '#16A34A',
    BLUE: '#2563EB',
    LIGHT_BLUE: '#38BDF8',
    YELLOW: '#FACC15',
    ORANGE: '#F97316',
    GOLD: '#D97706',
    CABLE_BG: '#1E293B',
    TEXT_LIGHT: '#F8FAFC',
    TEXT_DARK: '#0F172A',
    BLACK: '#000000',
    NOT_USED: '#94A3B8' // Warna abu-abu untuk slot kosong
};

const MODULE_DATA = {
    // 1. FXDD / ARDA / ARDB (900 MHz)
    FXDD: {
        name: 'FXDD / ARDA / ARDB (900 MHz)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: '2T2R', label: '2T2R' },
            { id: '4T4R', label: '4T4R' }
        ],
        jumperRules: {
            '2T2R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' }
            ],
            '4T4R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'RED:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' }
            ]
        },
        dc: {
            hideSector: true,
            cables: [
                { strips: ['RED:1'], labelBottom: 'Power #1' },
                { strips: ['RED:2'], labelBottom: 'Power #2' }
            ]
        },
        fo: {
            hideSector: true,
            cables: [
                { strips: ['RED:1'], labelBottom: 'Optic #1' },
                { strips: ['RED:2'], labelBottom: 'Optic #2' },
                { strips: ['RED:3'], labelBottom: 'Optic #3' },
                { strips: ['RED:4'], labelBottom: 'Optic #4' },
                { strips: ['RED:5'], labelBottom: 'Optic #5' },
                { strips: ['RED:6'], labelBottom: 'Optic #6' }
            ]
        }
    },

    // 2. AHPDC (700 + 900 MHz)
    AHPDC: {
        name: 'AHPDC (700 + 900 MHz)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: '2M', label: '2 RRU' },
            { id: '3M', label: '3 RRU' }
        ],
        jumperRules: {
            '2M': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:1', 'RED:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:2', 'RED:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['NOT_USED'] },
                { strips: ['NOT_USED'] }
            ],
            '3M': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:1', 'RED:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:2', 'RED:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:3', 'RED:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'GREEN:4', 'RED:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' }
            ]
        },
        dc: {
            hideSector: true,
            cables: [
                { strips: ['GREEN:1', 'RED:1'], labelBottom: 'AHPDC #1' },
                { strips: ['GREEN:2', 'RED:2'], labelBottom: 'AHPDC #2' },
                { strips: ['GREEN:3', 'RED:3'], labelBottom: 'AHPDC #3' }
            ]
        },
        fo: {
            hideSector: true,
            cables: [
                { strips: ['GOLD:1','SPACE', 'GREEN:1', 'RED:1'], moduleLabel: 'AHPDC #1', labelBottom: 'Optic #1' },
                { strips: ['GOLD:2','SPACE', 'GREEN:1', 'RED:1'], moduleLabel: 'AHPDC #1',labelBottom: 'Optic #2' },
                { strips: ['GOLD:1','SPACE', 'GREEN:2', 'RED:2'], moduleLabel: 'AHPDC #2',labelBottom: 'Optic #1' },
                { strips: ['GOLD:2','SPACE', 'GREEN:2', 'RED:2'], moduleLabel: 'AHPDC #2',labelBottom: 'Optic #2' },
                { strips: ['GOLD:1','SPACE', 'GREEN:3', 'RED:3'], moduleLabel: 'AHPDC #3',labelBottom: 'Optic #1' },
                { strips: ['GOLD:2','SPACE', 'GREEN:3', 'RED:3'], moduleLabel: 'AHPDC #3',labelBottom: 'Optic #2' }
            ]
        }
    },

    // 3. FXED / AREA / AREC (1800 MHz)
    FXED: {
        name: 'FXED / AREA / AREC (1800 MHz)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: '2T2R', label: '2T2R' },
            { id: '4T4R', label: '4T4R' }
        ],
        jumperRules: {
            '2T2R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' }
            ],
            '4T4R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' }
            ]
        },
        dc: {
            hideSector: true,
            cables: [
                { strips: ['BLUE:1'], labelBottom: 'Power #1' },
                { strips: ['BLUE:2'], labelBottom: 'Power #2' }
            ]
        },
        fo: {
            hideSector: true,
            cables: [
                { strips: ['ORANGE:1'], labelBottom: 'Optic #1' },
                { strips: ['ORANGE:2'], labelBottom: 'Optic #2' }, 
                { strips: ['ORANGE:3'], labelBottom: 'Optic #3' },
                { strips: ['ORANGE:4'], labelBottom: 'Optic #4' }, 
                { strips: ['ORANGE:5'], labelBottom: 'Optic #5' }, 
                { strips: ['ORANGE:6'], labelBottom: 'Optic #6' }
            ]
        }
    },

    // 4. AHEGC / AHEGG / AHEGH (1800+2100 MHz)
    AHEGG: {
        name: 'AHEGC / AHEGG / AHEGH (1800+2100)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: 'NORMAL', label: 'Mode Normal' },
            { id: 'HOS_M1', label: 'HOS (Modul Utama)' },
            { id: 'HOS_M2', label: 'HOS (Modul Kedua)' }
        ],
        jumperRules: {
            'NORMAL': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:1', 'WHITE:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:2', 'WHITE:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:3', 'ORANGE:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:4', 'ORANGE:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' }
            ],
            'HOS_M1': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:1', 'WHITE:1', 'SPACE','LIGHT_BLUE:1'], moduleLabel: 'Jumper #1 - HOS #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:2', 'WHITE:2', 'SPACE','LIGHT_BLUE:1'], moduleLabel: 'Jumper #2 - HOS #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:3', 'ORANGE:3', 'SPACE', 'LIGHT_BLUE:1'], moduleLabel: 'Jumper #3 - HOS #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:4', 'ORANGE:4', 'SPACE', 'LIGHT_BLUE:1'], moduleLabel: 'Jumper #4 - HOS #1', labelBottom: 'SECTOR_DYNAMIC' }
            ],
            'HOS_M2': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:1', 'WHITE:1', 'SPACE','LIGHT_BLUE:2'], moduleLabel: 'Jumper #1 - HOS #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'BLUE:2', 'WHITE:2', 'SPACE','LIGHT_BLUE:2'], moduleLabel: 'Jumper #2 - HOS #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:3', 'ORANGE:3', 'SPACE', 'LIGHT_BLUE:2'], moduleLabel: 'Jumper #3 - HOS #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'YELLOW:4', 'ORANGE:4', 'SPACE', 'LIGHT_BLUE:2'], moduleLabel: 'Jumper #4 - HOS #2', labelBottom: 'SECTOR_DYNAMIC' }
            ]
        },
        dcToggleTrigger: 'HOS',
        dcToggles: [
            { id: 'NORMAL', label: 'Mode Normal' },
            { id: 'HOS', label: 'Mode HOS' }
        ],
        dcRules: {
            'NORMAL': { hideSector: true, cables: [{ strips: ['BLUE:1', 'WHITE:1'], labelBottom: 'AHEGG #1' }, { strips: ['BLUE:2', 'WHITE:2'], labelBottom: 'AHEGG #2' }, { strips: ['BLUE:3', 'WHITE:3'], labelBottom: 'AHEGG #3' }] },
            'HOS': { hideSector: false, cables: [{ strips: ['BLUE:SECTOR', 'WHITE:SECTOR', 'SPACE', 'LIGHT_BLUE:1'], moduleLabel: 'HOS #1', labelBottom: 'SECTOR_DYNAMIC' }, { strips: ['BLUE:SECTOR', 'WHITE:SECTOR', 'SPACE', 'LIGHT_BLUE:2'], moduleLabel: 'HOS #2', labelBottom: 'SECTOR_DYNAMIC' }] }
        },
        foToggles: [
            { id: 'NORMAL', label: 'Mode Normal' },
            { id: 'HOS', label: 'Mode HOS' }
        ],
        foRules: {
            'NORMAL': { hideSector: true, cables: [{ strips: ['BLUE:1', 'WHITE:1'], labelBottom: 'AHEGG #1' }, { strips: ['BLUE:2', 'WHITE:2'], labelBottom: 'AHEGG #2' }, { strips: ['BLUE:3', 'WHITE:3'], labelBottom: 'AHEGG #3' }] },
            'HOS': { hideSector: false, cables: [{ strips: ['BLUE:SECTOR', 'WHITE:SECTOR', 'SPACE', 'LIGHT_BLUE:1'], moduleLabel: 'HOS #1', labelBottom: 'SECTOR_DYNAMIC' }, { strips: ['BLUE:SECTOR', 'WHITE:SECTOR', 'SPACE', 'LIGHT_BLUE:2'], moduleLabel: 'HOS #2', labelBottom: 'SECTOR_DYNAMIC' }] }
        }
    },

    // 5. FRGU / ARGA (2100 MHz)
    FRGU: {
        name: 'FRGU / ARGA (2100 MHz)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: '2T2R', label: '2T2R' },
            { id: '4T4R', label: '4T4R' }
        ],
        jumperRules: {
            '2T2R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' }
            ],
            '4T4R': [
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' },
                { strips: ['SECTOR_WHITE', 'SPACE', 'WHITE:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' }
            ]
        },
        dc: {
            hideSector: true,
            cables: [
                { strips: ['WHITE:1'], labelBottom: 'Power #1' },
                { strips: ['WHITE:2'], labelBottom: 'Power #2' }
            ]
        },
        fo: {
            hideSector: true,
            cables: [
                { strips: ['WHITE:1'], labelBottom: 'Optic #1' },
                { strips: ['WHITE:2'], labelBottom: 'Optic #2' },
                { strips: ['WHITE:3'], labelBottom: 'Optic #3' },
                { strips: ['WHITE:4'], labelBottom: 'Optic #4' },
                { strips: ['WHITE:5'], labelBottom: 'Optic #5' },
                { strips: ['WHITE:6'], labelBottom: 'Optic #6' }
            ]
        }
    },

    // 6. AKHD (2300 MHz / TDD)
    AKHD: {
        name: 'AKHD (2300 MHz / TDD)',
        type: 'RRH',
        hasJumper: true,
        jumperToggles: [
            { id: '2M', label: '2 RRU' },
            { id: '3M', label: '3 RRU' }
        ],
        jumperRules: {
            '2M': [ 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' } 
            ],
            '3M': [ 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:1'], moduleLabel: 'Jumper #1', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:2'], moduleLabel: 'Jumper #2', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:3'], moduleLabel: 'Jumper #3', labelBottom: 'SECTOR_DYNAMIC' }, 
                { strips: ['SECTOR_WHITE', 'SPACE', 'GOLD:4'], moduleLabel: 'Jumper #4', labelBottom: 'SECTOR_DYNAMIC' } 
            ]
        },
        dc: {
            hideSector: true,
            cables: [
                { strips: ['GOLD:1'], moduleLabel: 'AKHD', labelBottom: 'Sector 1' },
                { strips: ['GOLD:2'], moduleLabel: 'AKHD', labelBottom: 'Sector 2' },
                { strips: ['GOLD:3'], moduleLabel: 'AKHD', labelBottom: 'Sector 3' }
            ]
        },
        foToggles: [
            { id: '1FO', label: '1 Optic - 1 RRU' },
            { id: '2FO', label: '2 Optic - 1 RRU' }
        ],
        foRules: {
            '1FO': { 
                hideSector: true, 
                cables: [
                    { strips: ['GOLD:1'], moduleLabel: 'AKHD #1', labelBottom: 'Opt #1' },
                    { strips: ['GOLD:2'], moduleLabel: 'AKHD #2', labelBottom: 'Opt #1' },
                    { strips: ['GOLD:3'], moduleLabel: 'AKHD #3', labelBottom: 'Opt #1' }
                ] 
            },
            '2FO': { 
                hideSector: true, 
                cables: [
                    { strips: ['GOLD:1', 'SPACE', 'GOLD:1'], moduleLabel: 'AKHD #1', labelBottom: 'Opt #1' },
                    { strips: ['GOLD:2', 'SPACE', 'GOLD:1'], moduleLabel: 'AKHD #1', labelBottom: 'Opt #2' },
                    { strips: ['GOLD:1', 'SPACE', 'GOLD:2'], moduleLabel: 'AKHD #2', labelBottom: 'Opt #1' },
                    { strips: ['GOLD:2', 'SPACE', 'GOLD:2'], moduleLabel: 'AKHD #2', labelBottom: 'Opt #2' },
                    { strips: ['GOLD:1', 'SPACE', 'GOLD:3'], moduleLabel: 'AKHD #3', labelBottom: 'Opt #1' },
                    { strips: ['GOLD:2', 'SPACE', 'GOLD:3'], moduleLabel: 'AKHD #3', labelBottom: 'Opt #2' }
                ] 
            }
        }
    },

    // 7. AVHA (AAU - 2600 MHz)
    AVHA: {
        name: 'AVHA (AAU - 2600 MHz)',
        type: 'AAU',
        hasJumper: false,
        dc: {
            hideSector: true,
            cables: [
                { strips: ['GOLD:1'], labelBottom: 'AVHA (Sektor 1)' },
                { strips: ['GOLD:2'], labelBottom: 'AVHA (Sektor 2)' },
                { strips: ['GOLD:3'], labelBottom: 'AVHA (Sektor 3)' }
            ]
        },
        fo: {
            hideSector: true,
            cables: [
                { strips: ['GOLD:1'], labelBottom: 'AVHA (Sektor 1)' },
                { strips: ['GOLD:2'], labelBottom: 'AVHA (Sektor 2)' },
                { strips: ['GOLD:3'], labelBottom: 'AVHA (Sektor 3)' }
            ]
        }
    },

    // 8. Kabel Sync / GPS (FYGE)
    GPS: {
        name: 'Kabel Sync / GPS (FYGE)',
        type: 'GPS',
        segments: [
            { id: 'ant', location: 'Connector Antena', label: 'GPS 2', bg: 'BLACK', text: 'TEXT_LIGHT' },
            { id: 'spare', location: 'Gulungan Spare Optik', label: 'GPS 1', bg: 'BLACK', text: 'TEXT_LIGHT' },
            { id: 'hole', location: 'Hole Lubang Cabinet Belakang', label: 'GPS 1', bg: 'BLACK', text: 'TEXT_LIGHT' },
            { id: 'bbu', location: 'Connector BBU', label: 'Sync 1 NR2600', bg: 'RED', text: 'BLACK' }
        ]
    }
};