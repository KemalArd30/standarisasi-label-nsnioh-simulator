// app.js - Engine Simulator & Canvas Renderer (Hybrid Mobile Dropdown + Desktop Grid)

// State Aplikasi
let state = {
    module: '',
    tab: 'jumper',
    sector: 1,
    toggles: { jumper: '', dc: '', fo: '' }
};

// Referensi DOM Hybrid
const els = {
    moduleSelect: document.getElementById('module-select'), // Dropdown HP
    moduleGrid: document.getElementById('module-grid-container'), // Grid Desktop
    dynamicToggles: document.getElementById('dynamic-toggles'),
    mainTabs: document.getElementById('main-tabs'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    warningMsg: document.getElementById('warning-message'),
    sectorContainer: document.getElementById('sector-selection'),
    sectorBtns: document.querySelectorAll('.sector-btn'),
    canvasHeader: document.getElementById('canvas-header'),
    renderArea: document.getElementById('render-area')
};

// Inisialisasi Event Listener
function init() {
    renderModuleCards();

    // Event Listener untuk Dropdown Mobile
    els.moduleSelect.addEventListener('change', (e) => {
        handleModuleChange(e.target.value);
    });

    els.tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.tab = e.target.dataset.tab;
            updateUI();
        });
    });

    els.sectorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.sector = parseInt(e.target.dataset.sector);
            updateUI();
        });
    });
}

// Handler Sinkronisasi Pemilihan Modul (Berlaku untuk HP & PC)
function handleModuleChange(moduleKey) {
    state.module = moduleKey;
    
    // Sinkronkan nilai dropdown mobile (jika rigger resize layar PC ke HP)
    els.moduleSelect.value = moduleKey;

    // Reset tab ke default yang valid
    if (state.module === 'AVHA' && state.tab === 'jumper') state.tab = 'dc';
    else if (state.module !== 'GPS' && !['jumper', 'dc', 'fo'].includes(state.tab)) state.tab = 'jumper';
    
    updateUI();
}

// Generate Tombol Kartu Modul untuk Desktop
function renderModuleCards() {
    els.moduleGrid.innerHTML = '';
    for (const key in MODULE_DATA) {
        const mod = MODULE_DATA[key];
        const btn = document.createElement('button');
        btn.className = 'card-module font-mono-chivo';
        btn.innerText = mod.name;
        btn.dataset.module = key;
        
        btn.onclick = () => {
            handleModuleChange(key);
        };
        els.moduleGrid.appendChild(btn);
    }
}

// Update Seluruh UI berdasarkan State
function updateUI() {
    if (!state.module) return;

    // Sinkronisasi Status Aktif pada Grid Kartu Desktop
    document.querySelectorAll('.card-module').forEach(card => {
        if (card.dataset.module === state.module) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    const modData = MODULE_DATA[state.module];

    // 1. Handle GPS Khusus
    if (state.module === 'GPS') {
        els.mainTabs.classList.add('hidden');
        els.dynamicToggles.classList.add('hidden');
        els.warningMsg.classList.add('hidden');
        els.sectorContainer.classList.add('hidden');
        els.canvasHeader.classList.add('hidden');
        renderGPS(modData);
        return;
    }

    // 2. Tampilkan Tab & Handle AVHA (AAU)
    els.mainTabs.classList.remove('hidden');
    els.tabBtns.forEach(btn => {
        const tabType = btn.dataset.tab;
        if (state.module === 'AVHA' && tabType === 'jumper') {
            btn.classList.add('hidden'); // Sembunyikan tab Jumper
        } else {
            btn.classList.remove('hidden');
        }
        
        if (tabType === state.tab) {
            btn.classList.add('text-amber-500', 'border-amber-500');
            btn.classList.remove('text-slate-500', 'border-transparent');
        } else {
            btn.classList.add('text-slate-500', 'border-transparent');
            btn.classList.remove('text-amber-500', 'border-amber-500');
        }
    });

    els.warningMsg.classList.add('hidden');

    // 3. Render Toggles Dinamis
    renderToggles(modData);

    // 4. Update Visibilitas & State Sektor
    els.sectorBtns.forEach(btn => {
        if (parseInt(btn.dataset.sector) === state.sector) {
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-500');
            btn.classList.remove('bg-slate-800', 'text-slate-400', 'border-slate-700');
        } else {
            btn.classList.add('bg-slate-800', 'text-slate-400', 'border-slate-700');
            btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-500');
        }
    });

    const activeRules = getActiveRules(modData);
    if (activeRules && activeRules.hideSector) {
        els.sectorContainer.classList.add('hidden');
    } else {
        els.sectorContainer.classList.remove('hidden');
    }

    // 5. Render Kanvas
    els.canvasHeader.classList.remove('hidden');
    renderCanvas(modData, activeRules);
}

// Render Tombol Toggle Konfigurasi
function renderToggles(modData) {
    els.dynamicToggles.innerHTML = '';
    let togglesDef = null;

    if (state.tab === 'jumper' && modData.jumperToggles) togglesDef = modData.jumperToggles;
    if (state.tab === 'dc' && modData.dcToggles) togglesDef = modData.dcToggles;
    if (state.tab === 'fo' && modData.foToggles) togglesDef = modData.foToggles;

    if (togglesDef) {
        els.dynamicToggles.classList.remove('hidden');
        
        if (!state.toggles[state.tab]) {
            state.toggles[state.tab] = togglesDef[0].id;
        }

        togglesDef.forEach(tog => {
            const btn = document.createElement('button');
            const isActive = state.toggles[state.tab] === tog.id;
            
            btn.className = `px-3 py-1.5 text-xs font-bold rounded border transition-colors ${
                isActive ? 'bg-amber-500 text-black border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
            }`;
            btn.innerText = tog.label;
            btn.onclick = () => {
                state.toggles[state.tab] = tog.id;
                
                // Sinkronisasi Toggle HOS antara DC dan FO
                if (modData.dcToggleTrigger && tog.id.includes(modData.dcToggleTrigger)) {
                    state.toggles['dc'] = tog.id;
                    state.toggles['fo'] = tog.id;
                } else if (modData.dcToggleTrigger && tog.id === 'NORMAL') {
                    state.toggles['dc'] = 'NORMAL';
                    state.toggles['fo'] = 'NORMAL';
                }
                updateUI();
            };
            els.dynamicToggles.appendChild(btn);
        });
    } else {
        els.dynamicToggles.classList.add('hidden');
    }
}

function getActiveRules(modData) {
    if (state.tab === 'jumper') {
        if (!modData.hasJumper) return null;
        return { 
            cables: modData.jumperRules ? modData.jumperRules[state.toggles.jumper] : [],
            hideSector: false
        };
    }
    if (state.tab === 'dc') return modData.dcRules ? modData.dcRules[state.toggles.dc] : modData.dc;
    if (state.tab === 'fo') return modData.foRules ? modData.foRules[state.toggles.fo] : modData.fo;
    return null;
}

function parseStripRule(rule) {
    if (rule === 'NOT_USED') return { type: 'NOT_USED' };
    if (rule === 'SPACE') return { type: 'SPACE' };
    if (rule === 'SECTOR_WHITE') return { color: 'WHITE', count: state.sector, type: 'BAND' };
    
    let [colorKey, countStr] = rule.split(':');
    return { color: colorKey, count: countStr === 'SECTOR' ? state.sector : parseInt(countStr, 10), type: 'BAND' };
}

// Merender Kabel ke Kanvas
function renderCanvas(modData, rules) {
    els.renderArea.innerHTML = '';
    
    if (!rules || !rules.cables || rules.cables.length === 0) {
        els.renderArea.innerHTML = `<span class="text-slate-500 text-sm mt-10">Data konfigurasi tidak tersedia.</span>`;
        return;
    }

    const totalCables = rules.cables.length;
    const isDense = totalCables >= 6;
    
    // Gap disesuaikan agar 6 kabel muat di layar HP tanpa overflow
    els.renderArea.className = `w-full min-h-full flex justify-center ${isDense ? 'gap-2 sm:gap-3' : 'gap-4 sm:gap-8'} items-center relative`;

    rules.cables.forEach((cableDef) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-col items-center gap-2 relative shrink-0';

        if (cableDef.strips[0] === 'NOT_USED') {
            wrapper.innerHTML = `
                <div class="${isDense ? 'w-8 sm:w-10' : 'w-10 sm:w-12'} h-72 bg-slate-800/50 rounded-full border-2 border-slate-700 opacity-50 flex items-center justify-center relative shadow-inner">
                    <span class="text-[9px] sm:text-[10px] font-bold text-slate-500 -rotate-90 whitespace-nowrap tracking-widest">NOT USED</span>
                </div>
            `;
            els.renderArea.appendChild(wrapper);
            return;
        }

        const tube = document.createElement('div');
        const tubeWidth = isDense ? 'w-8 sm:w-10' : 'w-10 sm:w-12';
        tube.className = `${tubeWidth} h-72 bg-[#000000] rounded-full border border-slate-600 shadow-[0_0_15px_rgba(0,0,0,0.8)] relative flex flex-col items-center pt-8 overflow-hidden`;
        
        // Tekstur kabel (Garis halus)
        const texture = document.createElement('div');
        texture.className = 'cable-texture';
        tube.appendChild(texture);
        
        cableDef.strips.forEach(stripDef => {
            const parsed = parseStripRule(stripDef);
            if (parsed.type === 'SPACE') {
                const spc = document.createElement('div');
                spc.className = 'w-full h-8'; 
                tube.appendChild(spc);
            } else if (parsed.type === 'BAND') {
                for(let i = 0; i < parsed.count; i++) {
                    const band = document.createElement('div');
                    band.className = 'w-full h-3 sm:h-3.5 mb-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.6)] z-10 shrink-0';
                    band.style.backgroundColor = COLOR_PALETTE[parsed.color];
                    tube.appendChild(band);
                }
            }
        });

        wrapper.appendChild(tube);

        // Render Label Bawah & Modul Label
        if (cableDef.moduleLabel || cableDef.labelBottom) {
            const lblContainer = document.createElement('div');
            lblContainer.className = `flex flex-col items-center text-center ${isDense ? 'w-12 sm:w-14' : 'w-16'} leading-tight mt-2`;

            if (cableDef.moduleLabel) {
                const modLbl = document.createElement('span');
                modLbl.className = 'text-[9px] sm:text-[10px] font-black text-amber-500 uppercase tracking-tighter whitespace-nowrap';
                modLbl.textContent = cableDef.moduleLabel;
                lblContainer.appendChild(modLbl);
            }

            if (cableDef.labelBottom) {
                const optLbl = document.createElement('span');
                optLbl.className = 'text-[10px] sm:text-[11px] font-bold text-slate-300 whitespace-nowrap mt-0.5';
                optLbl.textContent = cableDef.labelBottom === 'SECTOR_DYNAMIC' ? `Sector ${state.sector}` : cableDef.labelBottom;
                lblContainer.appendChild(optLbl);
            }

            wrapper.appendChild(lblContainer);
        }
        els.renderArea.appendChild(wrapper);
    });
}

// Render Khusus GPS (Hibrida: Desktop Horizontal, Mobile Vertikal)
function renderGPS(modData) {
    els.renderArea.innerHTML = '';
    // flex-col (HP vertikal) | md:flex-row (Desktop sejajar)
    els.renderArea.className = 'w-full min-h-full flex flex-col md:flex-row gap-4 p-4 justify-center items-center overflow-x-auto';

    modData.segments.forEach((seg, idx) => {
        const card = document.createElement('div');
        card.className = 'flex flex-col items-center gap-3 p-5 bg-[#131b26] rounded-xl shadow-lg border border-slate-700 min-w-[160px] text-center shrink-0';
        
        const stepNum = document.createElement('div');
        stepNum.className = 'w-8 h-8 rounded-full bg-[#0a0d14] text-slate-400 flex items-center justify-center font-bold text-sm shadow-inner border border-slate-800';
        stepNum.innerText = idx + 1;

        const loc = document.createElement('div');
        loc.className = 'text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-wide';
        loc.innerText = seg.location;

        const labelBox = document.createElement('div');
        labelBox.className = 'px-4 py-2 rounded font-extrabold text-xs sm:text-sm border shadow-sm mt-2 font-mono-chivo tracking-widest';
        labelBox.style.backgroundColor = COLOR_PALETTE[seg.bg];
        labelBox.style.color = COLOR_PALETTE[seg.text];
        labelBox.style.borderColor = seg.bg === 'BLACK' ? '#334155' : '#7f1d1d';
        labelBox.innerText = seg.label;

        card.appendChild(stepNum);
        card.appendChild(loc);
        card.appendChild(labelBox);

        els.renderArea.appendChild(card);

        // Menambahkan panah alur antar kartu (kecuali item terakhir)
        if (idx < modData.segments.length - 1) {
            // Panah Kanan untuk Desktop
            const arrowRight = document.createElement('div');
            arrowRight.className = 'hidden md:flex items-center text-slate-600 text-3xl shrink-0';
            arrowRight.innerHTML = '&#8594;';
            
            // Panah Bawah untuk Mobile
            const arrowDown = document.createElement('div');
            arrowDown.className = 'flex md:hidden items-center text-slate-600 text-3xl shrink-0';
            arrowDown.innerHTML = '&#8595;';
            
            els.renderArea.appendChild(arrowRight);
            els.renderArea.appendChild(arrowDown);
        }
    });
}

// Jalankan sistem saat HTML selesai dimuat
window.onload = init;