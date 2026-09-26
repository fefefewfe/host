/* Cabezones 2026 — ligas, equipos y selecciones
   Formato de cada equipo: [nombre, código, nivel, diseño, color1, color2, pantalón]
   Diseños: liso, bastones, aros, banda, franja, mitades, ve, mangas, cuadros, cruz, franjav, diagonal */
(function () {
  'use strict';
  const CZ = (window.CZ = window.CZ || {});

  const LIGAS = [
    {
      id: 'laliga', nombre: 'LaLiga', pais: 'España', temporada: '2026-27',
      bandera: ['#AA151B', '#F1BF00', '#AA151B'],
      nota: 'Subieron Racing de Santander, Deportivo y Málaga',
      equipos: [
        ['Real Madrid', 'RMA', 91, 'liso', '#FFFFFF', '#1D2B64', '#FFFFFF'],
        ['Barcelona', 'BAR', 90, 'bastones', '#A50044', '#004D98', '#004D98'],
        ['Atlético de Madrid', 'ATM', 85, 'bastones', '#CB3524', '#FFFFFF', '#272E61'],
        ['Athletic Club', 'ATH', 80, 'bastones', '#EE2523', '#FFFFFF', '#111111'],
        ['Villarreal', 'VIL', 80, 'liso', '#FFE114', '#005187', '#FFE114'],
        ['Real Betis', 'BET', 78, 'bastones', '#00954C', '#FFFFFF', '#FFFFFF'],
        ['Real Sociedad', 'RSO', 76, 'bastones', '#0067B1', '#FFFFFF', '#FFFFFF'],
        ['Celta', 'CEL', 75, 'liso', '#8AC3EE', '#E5254E', '#FFFFFF'],
        ['Valencia', 'VAL', 74, 'liso', '#FFFFFF', '#EE3524', '#111111'],
        ['Sevilla', 'SEV', 73, 'liso', '#FFFFFF', '#D81920', '#FFFFFF'],
        ['Osasuna', 'OSA', 73, 'liso', '#D91A21', '#0A346F', '#0A346F'],
        ['Rayo Vallecano', 'RAY', 73, 'banda', '#FFFFFF', '#E53027', '#FFFFFF'],
        ['Espanyol', 'ESP', 73, 'bastones', '#007FC8', '#FFFFFF', '#1E4E9D'],
        ['Getafe', 'GET', 72, 'liso', '#005999', '#FFFFFF', '#005999'],
        ['Alavés', 'ALA', 71, 'bastones', '#0761AF', '#FFFFFF', '#0761AF'],
        ['Elche', 'ELC', 71, 'franja', '#FFFFFF', '#05642C', '#FFFFFF'],
        ['Deportivo', 'DEP', 71, 'bastones', '#FFFFFF', '#0063A6', '#0063A6'],
        ['Levante', 'LEV', 70, 'bastones', '#B4053F', '#004D98', '#004D98'],
        ['Racing de Santander', 'RSA', 70, 'liso', '#FFFFFF', '#00824A', '#111111'],
        ['Málaga', 'MAL', 69, 'bastones', '#0B63B0', '#FFFFFF', '#0B63B0']
      ]
    },
    {
      id: 'premier', nombre: 'Premier League', pais: 'Inglaterra', temporada: '2026-27',
      bandera: ['#FFFFFF', '#CE1124', '#FFFFFF'],
      nota: 'Subieron Coventry City, Ipswich Town y Hull City',
      equipos: [
        ['Arsenal', 'ARS', 90, 'mangas', '#EF0107', '#FFFFFF', '#FFFFFF'],
        ['Manchester City', 'MCI', 89, 'liso', '#6CABDD', '#1C2C5B', '#FFFFFF'],
        ['Liverpool', 'LIV', 88, 'liso', '#C8102E', '#F6EB61', '#C8102E'],
        ['Chelsea', 'CHE', 85, 'liso', '#034694', '#FFFFFF', '#034694'],
        ['Newcastle', 'NEW', 82, 'bastones', '#241F20', '#FFFFFF', '#241F20'],
        ['Aston Villa', 'AVL', 82, 'mangas', '#670E36', '#95BFE5', '#FFFFFF'],
        ['Manchester United', 'MUN', 82, 'liso', '#DA291C', '#FBE122', '#FFFFFF'],
        ['Tottenham', 'TOT', 80, 'liso', '#FFFFFF', '#132257', '#132257'],
        ['Brighton', 'BHA', 79, 'bastones', '#0057B8', '#FFFFFF', '#0057B8'],
        ['Crystal Palace', 'CRY', 79, 'bastones', '#1B458F', '#C4122E', '#1B458F'],
        ['Bournemouth', 'BOU', 77, 'bastones', '#DA291C', '#111111', '#111111'],
        ['Brentford', 'BRE', 77, 'bastones', '#E30613', '#FFFFFF', '#111111'],
        ['Fulham', 'FUL', 76, 'liso', '#FFFFFF', '#111111', '#111111'],
        ['Nottingham Forest', 'NFO', 76, 'liso', '#DD0000', '#FFFFFF', '#FFFFFF'],
        ['Everton', 'EVE', 76, 'liso', '#003399', '#FFFFFF', '#FFFFFF'],
        ['Sunderland', 'SUN', 75, 'bastones', '#EB172B', '#FFFFFF', '#111111'],
        ['Leeds United', 'LEE', 74, 'liso', '#FFFFFF', '#1D428A', '#FFFFFF'],
        ['Coventry City', 'COV', 72, 'liso', '#59CBE8', '#FFFFFF', '#59CBE8'],
        ['Ipswich Town', 'IPS', 72, 'liso', '#0044A9', '#FFFFFF', '#FFFFFF'],
        ['Hull City', 'HUL', 71, 'bastones', '#F5A12D', '#111111', '#111111']
      ]
    },
    {
      id: 'seriea', nombre: 'Serie A', pais: 'Italia', temporada: '2026-27',
      bandera: ['#009246', '#FFFFFF', '#CE2B37'],
      nota: 'Subieron Venezia, Frosinone y Monza',
      equipos: [
        ['Inter', 'INT', 88, 'bastones', '#0068A8', '#111111', '#111111'],
        ['Napoli', 'NAP', 86, 'liso', '#12A0D7', '#FFFFFF', '#FFFFFF'],
        ['Milan', 'MIL', 84, 'bastones', '#FB090B', '#111111', '#FFFFFF'],
        ['Juventus', 'JUV', 84, 'bastones', '#FFFFFF', '#111111', '#FFFFFF'],
        ['Atalanta', 'ATA', 82, 'bastones', '#1E71B8', '#111111', '#111111'],
        ['Roma', 'ROM', 82, 'liso', '#8E1F2F', '#F0BC42', '#FFFFFF'],
        ['Como', 'COM', 80, 'liso', '#1D3F8F', '#FFFFFF', '#1D3F8F'],
        ['Lazio', 'LAZ', 79, 'liso', '#87D8F7', '#FFFFFF', '#FFFFFF'],
        ['Bologna', 'BOL', 79, 'bastones', '#1A2F48', '#A21C26', '#FFFFFF'],
        ['Fiorentina', 'FIO', 76, 'liso', '#482E92', '#FFFFFF', '#482E92'],
        ['Torino', 'TOR', 75, 'liso', '#8A1E03', '#FFFFFF', '#FFFFFF'],
        ['Genoa', 'GEN', 73, 'mitades', '#A0142E', '#0B2C5F', '#0B2C5F'],
        ['Udinese', 'UDI', 73, 'bastones', '#111111', '#FFFFFF', '#111111'],
        ['Sassuolo', 'SAS', 73, 'bastones', '#00A752', '#111111', '#111111'],
        ['Parma', 'PAR', 72, 'cruz', '#FFFFFF', '#111111', '#FFFFFF'],
        ['Cagliari', 'CAG', 71, 'mitades', '#A0142E', '#002350', '#002350'],
        ['Lecce', 'LEC', 70, 'bastones', '#F5D130', '#D2232A', '#0A1F44'],
        ['Venezia', 'VEN', 70, 'franja', '#111111', '#F07A1A', '#111111'],
        ['Monza', 'MON', 70, 'franja', '#E31B23', '#FFFFFF', '#FFFFFF'],
        ['Frosinone', 'FRO', 69, 'liso', '#FDD203', '#1E4290', '#1E4290']
      ]
    },
    {
      id: 'bundesliga', nombre: 'Bundesliga', pais: 'Alemania', temporada: '2026-27',
      bandera: ['#111111', '#DD0000', '#FFCE00'],
      nota: 'Subieron Schalke 04, Elversberg y Paderborn',
      equipos: [
        ['Bayern Múnich', 'FCB', 91, 'liso', '#DC052D', '#FFFFFF', '#DC052D'],
        ['Borussia Dortmund', 'BVB', 84, 'liso', '#FDE100', '#111111', '#111111'],
        ['Bayer Leverkusen', 'B04', 83, 'liso', '#E32221', '#111111', '#111111'],
        ['RB Leipzig', 'RBL', 81, 'liso', '#FFFFFF', '#DD0741', '#FFFFFF'],
        ['Stuttgart', 'VFB', 81, 'franja', '#FFFFFF', '#E32219', '#FFFFFF'],
        ['Eintracht Frankfurt', 'SGE', 80, 'liso', '#111111', '#E1000F', '#111111'],
        ['Friburgo', 'SCF', 77, 'liso', '#D1001F', '#FFFFFF', '#111111'],
        ['Hoffenheim', 'TSG', 76, 'liso', '#1C63B7', '#FFFFFF', '#1C63B7'],
        ['Mönchengladbach', 'BMG', 76, 'liso', '#FFFFFF', '#1D9053', '#FFFFFF'],
        ['Werder Bremen', 'SVW', 75, 'liso', '#1D9053', '#FFFFFF', '#1D9053'],
        ['Mainz 05', 'M05', 74, 'liso', '#C3141E', '#FFFFFF', '#FFFFFF'],
        ['Union Berlín', 'FCU', 74, 'liso', '#EB1923', '#FFFFFF', '#FFFFFF'],
        ['Augsburgo', 'FCA', 73, 'liso', '#FFFFFF', '#BA3733', '#FFFFFF'],
        ['Colonia', 'KOE', 73, 'liso', '#FFFFFF', '#ED1C24', '#FFFFFF'],
        ['Hamburgo', 'HSV', 73, 'liso', '#FFFFFF', '#0A3F86', '#D40E1B'],
        ['Schalke 04', 'S04', 73, 'liso', '#004D9D', '#FFFFFF', '#FFFFFF'],
        ['Elversberg', 'SVE', 68, 'liso', '#111111', '#FFFFFF', '#111111'],
        ['Paderborn', 'SCP', 68, 'liso', '#005CA9', '#111111', '#111111']
      ]
    },
    {
      id: 'ligue1', nombre: 'Ligue 1', pais: 'Francia', temporada: '2026-27',
      bandera: ['#0055A4', '#FFFFFF', '#EF4135'],
      nota: 'Subieron Troyes y Le Mans',
      equipos: [
        ['Paris Saint-Germain', 'PSG', 90, 'franjav', '#004170', '#DA291C', '#004170'],
        ['Marsella', 'OM', 81, 'liso', '#FFFFFF', '#2FAEE0', '#FFFFFF'],
        ['Mónaco', 'ASM', 80, 'diagonal', '#E7101F', '#FFFFFF', '#FFFFFF'],
        ['Lille', 'LIL', 79, 'liso', '#E01E13', '#1C2C5B', '#1C2C5B'],
        ['Lyon', 'OL', 79, 'liso', '#FFFFFF', '#14387F', '#FFFFFF'],
        ['Lens', 'RCL', 79, 'bastones', '#FFD100', '#E30613', '#111111'],
        ['Rennes', 'REN', 76, 'liso', '#E13327', '#111111', '#111111'],
        ['Estrasburgo', 'RCS', 76, 'liso', '#009FE3', '#FFFFFF', '#FFFFFF'],
        ['Niza', 'NIC', 75, 'bastones', '#C8102E', '#111111', '#111111'],
        ['Toulouse', 'TFC', 72, 'liso', '#54297A', '#FFFFFF', '#FFFFFF'],
        ['Brest', 'BRS', 72, 'liso', '#E30613', '#FFFFFF', '#FFFFFF'],
        ['Paris FC', 'PFC', 72, 'liso', '#13294B', '#7AB9E8', '#13294B'],
        ['Lorient', 'FCL', 71, 'liso', '#FF7F00', '#111111', '#111111'],
        ['Auxerre', 'AJA', 70, 'liso', '#FFFFFF', '#0059A8', '#FFFFFF'],
        ['Angers', 'SCO', 69, 'bastones', '#111111', '#FFFFFF', '#111111'],
        ['Le Havre', 'HAC', 69, 'mitades', '#7AB9E8', '#0A2146', '#0A2146'],
        ['Troyes', 'EST', 68, 'liso', '#1D5BA8', '#FFFFFF', '#FFFFFF'],
        ['Le Mans', 'LMF', 67, 'liso', '#E30613', '#FFD200', '#111111']
      ]
    },
    {
      id: 'argentina', nombre: 'Liga Profesional', pais: 'Argentina', temporada: '2026',
      bandera: ['#74ACDF', '#FFFFFF', '#74ACDF'],
      nota: 'Subieron Gimnasia de Mendoza y Estudiantes de Río Cuarto',
      equipos: [
        ['River Plate', 'RIV', 83, 'banda', '#FFFFFF', '#E4002B', '#111111'],
        ['Boca Juniors', 'BOC', 82, 'franja', '#0A3A7E', '#FDB813', '#0A3A7E'],
        ['Racing Club', 'RAC', 80, 'bastones', '#6CACE4', '#FFFFFF', '#111111'],
        ['Belgrano', 'BEL', 77, 'liso', '#6CACE4', '#FFFFFF', '#0A1F44'],
        ['Estudiantes (LP)', 'EDL', 77, 'bastones', '#E3001B', '#FFFFFF', '#111111'],
        ['Vélez Sarsfield', 'VEL', 77, 've', '#FFFFFF', '#1D3F8F', '#FFFFFF'],
        ['Independiente', 'IND', 76, 'liso', '#E1000F', '#FFFFFF', '#0A1F5C'],
        ['Rosario Central', 'CEN', 76, 'bastones', '#1D3F8F', '#FDB913', '#1D3F8F'],
        ['Lanús', 'LAN', 76, 'liso', '#800020', '#FFFFFF', '#800020'],
        ['Talleres', 'TAL', 75, 'bastones', '#0A2A60', '#FFFFFF', '#0A2A60'],
        ['San Lorenzo', 'SLO', 74, 'bastones', '#1D3F8F', '#D0102D', '#1D3F8F'],
        ['Argentinos Juniors', 'AAJ', 74, 'liso', '#E1000F', '#FFFFFF', '#FFFFFF'],
        ['Huracán', 'HUR', 72, 'liso', '#FFFFFF', '#E1000F', '#FFFFFF'],
        ['Newell\'s Old Boys', 'NOB', 71, 'mitades', '#E1000F', '#111111', '#111111'],
        ['Defensa y Justicia', 'DYJ', 71, 'liso', '#FFE100', '#009A44', '#009A44'],
        ['Tigre', 'TIG', 71, 'franja', '#0A2A60', '#E1000F', '#0A2A60'],
        ['Platense', 'PLA', 71, 'franja', '#FFFFFF', '#5B3A1F', '#5B3A1F'],
        ['Unión', 'UNI', 71, 'bastones', '#E1000F', '#FFFFFF', '#111111'],
        ['Gimnasia (LP)', 'GEL', 71, 'franja', '#FFFFFF', '#0A2A60', '#0A2A60'],
        ['Independiente Rivadavia', 'IRV', 71, 'liso', '#1D3F8F', '#FFFFFF', '#FFFFFF'],
        ['Instituto', 'INS', 70, 'bastones', '#E1000F', '#FFFFFF', '#111111'],
        ['Banfield', 'BAN', 70, 'bastones', '#009A44', '#FFFFFF', '#FFFFFF'],
        ['Atlético Tucumán', 'ATU', 70, 'bastones', '#6CACE4', '#FFFFFF', '#0A1F44'],
        ['Central Córdoba', 'CCO', 70, 'bastones', '#111111', '#FFFFFF', '#111111'],
        ['Barracas Central', 'BCE', 69, 'bastones', '#D2002E', '#FFFFFF', '#111111'],
        ['Deportivo Riestra', 'RIE', 69, 'liso', '#111111', '#FFFFFF', '#111111'],
        ['Sarmiento', 'SAR', 68, 'liso', '#009A44', '#FFFFFF', '#FFFFFF'],
        ['Aldosivi', 'ALD', 67, 'bastones', '#009A44', '#FFE100', '#009A44'],
        ['Gimnasia (Mendoza)', 'GMZ', 67, 'bastones', '#111111', '#FFFFFF', '#111111'],
        ['Estudiantes (Río Cuarto)', 'ERC', 66, 'liso', '#6CACE4', '#FFFFFF', '#FFFFFF']
      ]
    },
    {
      id: 'brasil', nombre: 'Brasileirão', pais: 'Brasil', temporada: '2026',
      bandera: ['#009C3B', '#FFDF00', '#002776'],
      nota: 'Subieron Coritiba, Athletico-PR, Chapecoense y Remo',
      equipos: [
        ['Flamengo', 'FLA', 86, 'aros', '#C3281E', '#111111', '#FFFFFF'],
        ['Palmeiras', 'PAL', 85, 'liso', '#006437', '#FFFFFF', '#FFFFFF'],
        ['Cruzeiro', 'CRU', 80, 'liso', '#003DA5', '#FFFFFF', '#FFFFFF'],
        ['Botafogo', 'BOT', 79, 'bastones', '#111111', '#FFFFFF', '#111111'],
        ['Atlético Mineiro', 'CAM', 78, 'bastones', '#FFFFFF', '#111111', '#111111'],
        ['Fluminense', 'FLU', 78, 'bastones', '#870A28', '#00613C', '#FFFFFF'],
        ['São Paulo', 'SAO', 77, 'franja', '#FFFFFF', '#E30613', '#FFFFFF'],
        ['Corinthians', 'COR', 77, 'liso', '#FFFFFF', '#111111', '#111111'],
        ['Internacional', 'SCI', 77, 'liso', '#E30613', '#FFFFFF', '#FFFFFF'],
        ['Bahia', 'BAH', 77, 'liso', '#FFFFFF', '#0033A0', '#0033A0'],
        ['Grêmio', 'GRE', 76, 'bastones', '#0D80BF', '#111111', '#111111'],
        ['Vasco da Gama', 'VAS', 75, 'banda', '#111111', '#FFFFFF', '#111111'],
        ['Santos', 'SAN', 75, 'liso', '#FFFFFF', '#111111', '#FFFFFF'],
        ['Red Bull Bragantino', 'RBB', 74, 'liso', '#FFFFFF', '#E30613', '#FFFFFF'],
        ['Mirassol', 'MIR', 74, 'liso', '#FFE100', '#009A44', '#009A44'],
        ['Athletico Paranaense', 'CAP', 73, 'bastones', '#E30613', '#111111', '#111111'],
        ['Vitória', 'VIT', 70, 'bastones', '#E30613', '#111111', '#FFFFFF'],
        ['Coritiba', 'CFC', 70, 'aros', '#FFFFFF', '#00543C', '#111111'],
        ['Chapecoense', 'CHA', 69, 'liso', '#009A44', '#FFFFFF', '#FFFFFF'],
        ['Remo', 'REM', 68, 'liso', '#0A2A60', '#FFFFFF', '#FFFFFF']
      ]
    },
    {
      id: 'ligamx', nombre: 'Liga MX', pais: 'México', temporada: 'Apertura 2026',
      bandera: ['#006847', '#FFFFFF', '#CE1126'],
      nota: 'Vuelve Atlante, que compró la plaza de Mazatlán',
      equipos: [
        ['América', 'AME', 81, 'liso', '#FFD700', '#0A2A60', '#0A2A60'],
        ['Toluca', 'TOL', 81, 'liso', '#E30613', '#FFFFFF', '#FFFFFF'],
        ['Cruz Azul', 'CAZ', 80, 'liso', '#004C99', '#FFFFFF', '#004C99'],
        ['Tigres UANL', 'UAN', 80, 'liso', '#FDB913', '#0A2A60', '#0A2A60'],
        ['Monterrey', 'MTY', 80, 'bastones', '#0A2A60', '#FFFFFF', '#0A2A60'],
        ['Guadalajara', 'GDL', 77, 'bastones', '#E30613', '#FFFFFF', '#0A2A60'],
        ['Pachuca', 'PAC', 75, 'bastones', '#0A2A60', '#FFFFFF', '#FFFFFF'],
        ['Pumas UNAM', 'PUM', 75, 'liso', '#0A1F44', '#C6A13F', '#0A1F44'],
        ['León', 'LEO', 73, 'liso', '#00843D', '#FFFFFF', '#FFFFFF'],
        ['Tijuana', 'TIJ', 72, 'bastones', '#C8102E', '#111111', '#111111'],
        ['Atlas', 'ATL', 71, 'mitades', '#E30613', '#111111', '#111111'],
        ['Santos Laguna', 'SLA', 70, 'bastones', '#00843D', '#FFFFFF', '#FFFFFF'],
        ['Necaxa', 'NEC', 70, 'bastones', '#E30613', '#FFFFFF', '#111111'],
        ['Atlético de San Luis', 'ASL', 70, 'bastones', '#E30613', '#FFFFFF', '#0A2A60'],
        ['Juárez', 'JUA', 69, 'liso', '#D4002A', '#111111', '#111111'],
        ['Querétaro', 'QRO', 68, 'bastones', '#0A2A60', '#111111', '#111111'],
        ['Puebla', 'PUE', 68, 'banda', '#FFFFFF', '#0A2A60', '#FFFFFF'],
        ['Atlante', 'ATE', 68, 'bastones', '#0A2A60', '#C8102E', '#FFFFFF']
      ]
    }
  ];

  // Mundial 2026: los 12 grupos reales del sorteo
  const MUNDIAL = {
    id: 'mundial', nombre: 'Mundial 2026', pais: 'Selecciones', temporada: 'EE. UU., México y Canadá',
    bandera: ['#0A3161', '#FFFFFF', '#006847', '#D80621'],
    nota: 'Debutan Cabo Verde, Curazao, Jordania y Uzbekistán',
    selecciones: true,
    grupos: [
      ['MEX', 'RSA', 'KOR', 'CZE'],
      ['CAN', 'BIH', 'QAT', 'SUI'],
      ['BRA', 'MAR', 'HAI', 'SCO'],
      ['USA', 'PAR', 'AUS', 'TUR'],
      ['GER', 'CUW', 'CIV', 'ECU'],
      ['NED', 'JPN', 'SWE', 'TUN'],
      ['BEL', 'EGY', 'IRN', 'NZL'],
      ['ESP', 'CPV', 'KSA', 'URU'],
      ['FRA', 'SEN', 'IRQ', 'NOR'],
      ['ARG', 'ALG', 'AUT', 'JOR'],
      ['POR', 'UZB', 'COL', 'COD'],
      ['ENG', 'CRO', 'GHA', 'PAN']
    ],
    equipos: [
      ['Argentina', 'ARG', 92, 'bastones', '#75AADB', '#FFFFFF', '#111111'],
      ['España', 'ESP', 91, 'liso', '#C60B1E', '#FFC400', '#0A2A60'],
      ['Francia', 'FRA', 91, 'liso', '#002654', '#FFFFFF', '#FFFFFF'],
      ['Inglaterra', 'ENG', 89, 'liso', '#FFFFFF', '#0A2A60', '#0A2A60'],
      ['Brasil', 'BRA', 88, 'liso', '#FFDF00', '#009C3B', '#0033A0'],
      ['Portugal', 'POR', 88, 'liso', '#C8102E', '#046A38', '#046A38'],
      ['Alemania', 'GER', 86, 'liso', '#FFFFFF', '#111111', '#111111'],
      ['Países Bajos', 'NED', 85, 'liso', '#F36C21', '#FFFFFF', '#F36C21'],
      ['Bélgica', 'BEL', 82, 'liso', '#E30613', '#111111', '#111111'],
      ['Croacia', 'CRO', 81, 'cuadros', '#FF0000', '#FFFFFF', '#FFFFFF'],
      ['Uruguay', 'URU', 81, 'liso', '#5CBFEB', '#111111', '#111111'],
      ['Colombia', 'COL', 81, 'liso', '#FCD116', '#003893', '#003893'],
      ['Marruecos', 'MAR', 81, 'liso', '#C1272D', '#006233', '#006233'],
      ['Japón', 'JPN', 79, 'liso', '#1B3A8C', '#FFFFFF', '#FFFFFF'],
      ['Noruega', 'NOR', 79, 'liso', '#BA0C2F', '#FFFFFF', '#FFFFFF'],
      ['Estados Unidos', 'USA', 78, 'liso', '#FFFFFF', '#0A3161', '#0A3161'],
      ['México', 'MEX', 78, 'liso', '#006847', '#FFFFFF', '#FFFFFF'],
      ['Suiza', 'SUI', 78, 'liso', '#D52B1E', '#FFFFFF', '#FFFFFF'],
      ['Senegal', 'SEN', 78, 'liso', '#FFFFFF', '#00853F', '#FFFFFF'],
      ['Ecuador', 'ECU', 78, 'liso', '#FFD100', '#034EA2', '#034EA2'],
      ['Turquía', 'TUR', 77, 'liso', '#E30A17', '#FFFFFF', '#FFFFFF'],
      ['Austria', 'AUT', 77, 'liso', '#ED2939', '#FFFFFF', '#FFFFFF'],
      ['Corea del Sur', 'KOR', 76, 'liso', '#CD2E3A', '#111111', '#111111'],
      ['Suecia', 'SWE', 76, 'liso', '#FECC00', '#006AA7', '#006AA7'],
      ['Costa de Marfil', 'CIV', 76, 'liso', '#FF8200', '#009E60', '#FFFFFF'],
      ['Canadá', 'CAN', 75, 'liso', '#D80621', '#FFFFFF', '#D80621'],
      ['Paraguay', 'PAR', 75, 'bastones', '#D52B1E', '#FFFFFF', '#0038A8'],
      ['República Checa', 'CZE', 74, 'liso', '#D7141A', '#FFFFFF', '#FFFFFF'],
      ['Escocia', 'SCO', 74, 'liso', '#0A2A60', '#FFFFFF', '#FFFFFF'],
      ['Argelia', 'ALG', 74, 'liso', '#FFFFFF', '#006633', '#FFFFFF'],
      ['Egipto', 'EGY', 74, 'liso', '#C8102E', '#FFFFFF', '#FFFFFF'],
      ['Irán', 'IRN', 73, 'liso', '#FFFFFF', '#DA0000', '#FFFFFF'],
      ['Australia', 'AUS', 72, 'liso', '#FFCD00', '#00843D', '#00843D'],
      ['Ghana', 'GHA', 71, 'liso', '#FFFFFF', '#111111', '#FFFFFF'],
      ['RD del Congo', 'COD', 71, 'liso', '#007FFF', '#F7D618', '#007FFF'],
      ['Bosnia y Herzegovina', 'BIH', 70, 'liso', '#002395', '#FECB00', '#002395'],
      ['Túnez', 'TUN', 70, 'liso', '#E70013', '#FFFFFF', '#FFFFFF'],
      ['Sudáfrica', 'RSA', 70, 'liso', '#FFB612', '#007749', '#007749'],
      ['Panamá', 'PAN', 69, 'liso', '#DA121A', '#FFFFFF', '#DA121A'],
      ['Uzbekistán', 'UZB', 69, 'liso', '#FFFFFF', '#0099B5', '#FFFFFF'],
      ['Arabia Saudita', 'KSA', 68, 'liso', '#006C35', '#FFFFFF', '#FFFFFF'],
      ['Catar', 'QAT', 67, 'liso', '#8A1538', '#FFFFFF', '#FFFFFF'],
      ['Irak', 'IRQ', 67, 'liso', '#007A3D', '#FFFFFF', '#FFFFFF'],
      ['Jordania', 'JOR', 67, 'liso', '#CE1126', '#FFFFFF', '#FFFFFF'],
      ['Cabo Verde', 'CPV', 66, 'liso', '#003893', '#FFFFFF', '#003893'],
      ['Haití', 'HAI', 64, 'liso', '#00209F', '#D21034', '#D21034'],
      ['Nueva Zelanda', 'NZL', 64, 'liso', '#FFFFFF', '#111111', '#111111'],
      ['Curazao', 'CUW', 63, 'liso', '#002B7F', '#F9E814', '#002B7F']
    ]
  };

  /* ---------- Generación determinística de cada cabezón ---------- */
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

  const PIELES = ['#F6D5B8', '#EFC39C', '#E2AE82', '#D39A6A', '#BD8053', '#A06843', '#845234', '#673D27', '#4F2E1E'];
  const PELOS = ['#16110E', '#231812', '#3B2618', '#5A3A22', '#7B4E2A', '#A8713A', '#D9B26A', '#EAD39A', '#B4472A', '#EDEDED'];
  const PEINADOS = ['corto', 'corto', 'rapado', 'rulos', 'afro', 'largo', 'cresta', 'pelado', 'puntas', 'rodete', 'flequillo', 'trenzas', 'lado', 'lado'];
  const BARBAS = ['nada', 'nada', 'nada', 'sombra', 'sombra', 'barba', 'barba', 'bigote', 'candado'];
  const BOTINES = ['#15151A', '#15151A', '#F4F4F4', '#FF6A13', '#39E36B', '#22C7F0', '#FF4FA3', '#FFD23F'];
  const SUPERS = ['fuego', 'hielo', 'rayo', 'tornado'];

  function crearAspecto(id) {
    const r = rng(hash(id + '#cara'));
    const piel = pick(r, PIELES);
    let peinado = pick(r, PEINADOS);
    let pelo = pick(r, PELOS);
    if (peinado === 'afro' || peinado === 'trenzas') pelo = pick(r, PELOS.slice(0, 4));
    return {
      piel,
      pelo,
      peinado,
      barba: pick(r, BARBAS),
      botin: pick(r, BOTINES),
      vincha: r() < 0.22,
      ojos: 0.9 + r() * 0.25,
      cejas: 0.8 + r() * 0.5
    };
  }

  function crearStats(id, nivel) {
    const r = rng(hash(id + '#stats'));
    const base = clamp((nivel - 60) / 33, 0, 1);
    const v = () => clamp(0.2 + base * 0.62 + (r() - 0.5) * 0.3, 0.12, 1);
    return { velocidad: v(), salto: v(), potencia: v() };
  }

  function armarEquipo(fila, ligaId) {
    const [nombre, corto, nivel, diseno, c1, c2, pantalon] = fila;
    const id = ligaId + ':' + corto;
    const r = rng(hash(id + '#super'));
    return {
      id, nombre, corto, nivel, liga: ligaId,
      kit: { diseno, c1, c2, pantalon, medias: diseno === 'liso' && c1 === '#FFFFFF' ? pantalon : c1 },
      aspecto: crearAspecto(id),
      stats: crearStats(id, nivel),
      super: pick(r, SUPERS)
    };
  }

  const EQUIPOS = {};
  const COMPETICIONES = [];
  for (const liga of LIGAS.concat([MUNDIAL])) {
    const comp = Object.assign({}, liga);
    comp.equipos = liga.equipos.map((f) => {
      const eq = armarEquipo(f, liga.id);
      EQUIPOS[eq.id] = eq;
      return eq.id;
    });
    COMPETICIONES.push(comp);
  }

  CZ.datos = {
    competiciones: COMPETICIONES,
    ligas: COMPETICIONES.filter((c) => !c.selecciones),
    mundial: COMPETICIONES.find((c) => c.selecciones),
    equipos: EQUIPOS,
    equipo: (id) => EQUIPOS[id],
    competicion: (id) => COMPETICIONES.find((c) => c.id === id),
    hash,
    rng
  };
})();
