import { ReadonlyMapOf } from "data/util";
import { AppColors } from "./types";

// Celer color scheme
export const CelerColors = {
	main1: "#e3e3d5",
	main2: "#b9c3b5",
	main3: "#8fa49b",
	main4: "#688584",
	main5: "#48676e",
	main6: "#2f4858",
	text1: "#525215",
};

// Colors for the home page
export const HomePageColors = {
	background: "#e3e3d5",
	titleText: "#525215",
	sectionTitleText: "#525215",
	recentRoutesList: "#3d3d0d",
	codeBlock: "#3d3d0d"
};

export const SettingsColors = {
	pageBackground: "ffffff99",
	dialogBackground: "e3e3d5",
	titleText: "525215",
};

export const DefaultColors: AppColors = {
	text: "black",
	subText: "#333333",
	menuBorder: "black",
	menuHover: "#eeeeee",
	menuBackground: "#ffffff",
	statusBar: "#dddddd",
	menuAnchorHover: "#eeeeee",
	sectionNumberBackground: "#001a00",
	sectionNumberColor: "#ffff00",
	sectionNumberBorder: "transparent",
	sectionTitleBackground: "#001a00",
	sectionTitleColor: "#ffff00",
	sectionTitleBorder: "transparent",

	bannerNotesBackground: "#ccccff",
	bannerNotesBorder: "#8888ee",
	bannerNotesText: "#000000",
	bannerWarningBackground: "#ffbb00",
	bannerWarningBorder: "#883300",
	bannerWarningText: "#000000",
	bannerErrorBackground: "#ff6666",
	bannerErrorBorder: "#990000",
	bannerErrorText: "#000000",

	lineNumberBackground: "transparent",
	lineNumberBorder: "#000000",
	lineNumberColor: "inherit",
	counterNumberBorder: "transparent",
	counterText: "inherit",

	counterShrineBackground: "#00ffff",
	counterShrineText: "inherit",
	counterTowerBackground: "#00ffff",
	counterTowerText: "inherit",
	counterWarpBackground: "#00ffff",
	counterWarpText: "inherit",
	counterMemoryBackground: "#00ffff",
	counterMemoryText: "inherit",
	counterKorokBackground: "#00ff00",
	counterKorokText: "inherit",
	counterHinoxBackground: "#ffa500",
	counterHinoxText: "inherit",
	counterTalusBackground: "#ffa500",
	counterTalusText: "inherit",
	counterMoldugaBackground: "#ffa500",
	counterMoldugaText: "inherit",

	instructionShrineBackground: "#001a00",
	instructionShrineText: "#00ffff",
	instructionTowerBackground: "#001a00",
	instructionTowerText: "#00ffff",
	instructionWarpBackground: "#001a00",
	instructionWarpText: "#00ffff",
	instructionMemoryBackground: "#001a00",
	instructionMemoryText: "#00ffff",
	instructionKorokBackground: "#001a00",
	instructionKorokText: "#00ff00",
	instructionHinoxBackground: "#001a00",
	instructionHinoxText: "#ffa500",
	instructionTalusBackground: "#001a00",
	instructionTalusText: "#ffa500",
	instructionMoldugaBackground: "#001a00",
	instructionMoldugaText: "#001a00",

	stepNumberBackground: "#001a00",
	stepNumberBorder: "transparent",
	stepNumberText: "#d8bfd8",
	docTextBackground: "#001a00",
	docTextBorder: "transparent",
	docTextColor: "#ffffff",
	docNotesBackground: "#ccccff",
	docNotesColor: "inherit",
	docNotesBackgroundAlt: "#ffcc33",
	docNotesColorAlt: "inherit",
	docLineBackground: "#ffffff",
	docLineBackgroundAlt: "#eeeeee",
	docLineBackgroundSelected: "#ffffaa",

	stringItemColor: "#ffff00",
	stringLocationColor: "#00ffff",
	stringNpcColor: "#00ff00",
	stringRuneColor: "#ffa500",
	stringBossColor: "#ffa500",
	stringEnemyColor: "#00ffff",
	stringDirectionColor: "#ffff00",
	stringLinkColor: "inherit",
	stringVariableColor: "#ffc0cb",
	stringImportantColor: "#ff00ff",
	stringGaleColor: "#00ff00",
	stringFuryColor: "#ffa500",

	stringItemColorNotes: "#ffff00",
	stringLocationColorNotes: "#00ffff",
	stringNpcColorNotes: "#00ff00",
	stringRuneColorNotes: "#ff8800",
	stringBossColorNotes: "#ff8800",
	stringEnemyColorNotes: "#00ffff",
	stringDirectionColorNotes: "#ffff00",
	stringLinkColorNotes: "inherit",
	stringVariableColorNotes: "#880000",
	stringImportantColorNotes: "#ff00ff",
	stringGaleColorNotes: "#008800",
	stringFuryColorNotes: "#ff8800",
};

export const GranatusColors: AppColors = {
	text: "black",
	subText: "#333333",
	menuBorder: "black",
	menuHover: "#eeeeee",
	menuBackground: "#ffffff",
	statusBar: "#dddddd",
	menuAnchorHover: "#eeeeee",
	sectionNumberBackground: "#ffffff",
	sectionNumberColor: "#333333",
	sectionNumberBorder: "#dddddd",
	sectionTitleBackground: "rgb(51, 136, 255)",
	sectionTitleColor: "#000000",
	sectionTitleBorder: "#000000",

	bannerNotesBackground: "#a2c4c4",
	bannerNotesBorder: "#446666",
	bannerNotesText: "#000000",
	bannerWarningBackground: "#ffbb00",
	bannerWarningBorder: "#883300",
	bannerWarningText: "#000000",
	bannerErrorBackground: "#ff6666",
	bannerErrorBorder: "#990000",
	bannerErrorText: "#000000",

	lineNumberBackground: "#eeeeee",
	lineNumberBorder: "#c0c0c0",
	lineNumberColor: "#707070",

	counterNumberBorder: "transparent",
	counterText: "inherit",

	counterShrineBackground: "#000000",
	counterShrineText: "#ffffff",
	counterTowerBackground: "#000000",
	counterTowerText: "#ffffff",
	counterWarpBackground: "#a2c4c4",
	counterWarpText: "#000000",
	counterMemoryBackground: "#00ffff",
	counterMemoryText: "#000000",
	counterKorokBackground: "#c07ba0",
	counterKorokText: "#000000",
	counterHinoxBackground: "#ff4444",
	counterHinoxText: "#000000",
	counterTalusBackground: "#ff4444",
	counterTalusText: "#000000",
	counterMoldugaBackground: "#ff4444",
	counterMoldugaText: "#000000",

	instructionShrineBackground: "#000000",
	instructionShrineText: "#ffffff",
	instructionTowerBackground: "#000000",
	instructionTowerText: "#ffffff",
	instructionWarpBackground: "#a2c4c4",
	instructionWarpText: "#000000",
	instructionMemoryBackground: "#00ffff",
	instructionMemoryText: "#000000",
	instructionKorokBackground: "#c07ba0",
	instructionKorokText: "#000000",
	instructionHinoxBackground: "#ff4444",
	instructionHinoxText: "#000000",
	instructionTalusBackground: "#ff4444",
	instructionTalusText: "#000000",
	instructionMoldugaBackground: "#ff4444",
	instructionMoldugaText: "#000000",

	stepNumberBackground: "transparent",
	stepNumberBorder: "#c0c0c0",
	stepNumberText: "#333333",
	docTextBackground: "#ffd866",
	docTextBorder: "#000000",
	docTextColor: "inherit",
	docNotesBackground: "#eeeeee",
	docNotesColor: "inherit",
	docNotesBackgroundAlt: "#eeeeee",
	docNotesColorAlt: "inherit",
	docLineBackground: "#ffffff",
	docLineBackgroundAlt: "#ffffff",
	docLineBackgroundSelected: "#ffffaa",

	stringItemColor: "inherit",
	stringLocationColor: "inherit",
	stringNpcColor: "inherit",
	stringRuneColor: "inherit",
	stringBossColor: "inherit",
	stringEnemyColor: "inherit",
	stringDirectionColor: "inherit",
	stringLinkColor: "inherit",
	stringVariableColor: "inherit",
	stringImportantColor: "inherit",
	stringGaleColor: "#00ff00",
	stringFuryColor: "#ff8800",

	stringItemColorNotes: "inherit",
	stringLocationColorNotes: "inherit",
	stringNpcColorNotes: "inherit",
	stringRuneColorNotes: "inherit",
	stringBossColorNotes: "inherit",
	stringEnemyColorNotes: "inherit",
	stringDirectionColorNotes: "inherit",
	stringLinkColorNotes: "inherit",
	stringVariableColorNotes: "inherit",
	stringImportantColorNotes: "inherit",
	stringGaleColorNotes: "#00ff00",
	stringFuryColorNotes: "#ff8800",
};

export const ThemeColorMap: ReadonlyMapOf<AppColors> = {
	Default: DefaultColors,
	Granatus: GranatusColors
};
