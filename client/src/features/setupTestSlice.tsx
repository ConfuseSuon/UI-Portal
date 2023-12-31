import { createSlice } from "@reduxjs/toolkit";
import { TestSuiteTypos } from "../views/pages/tests/SetupaTest";
import { TaskTypos } from "../views/components/DragDrop";
import { taskData } from "../mockData";
import { TopologiesTypo } from "../views/pages/manage/Inventory";

interface TyposInitState {
  selectTestSuite: TestSuiteTypos | null;
  testSuiteDetail: TestSuiteTypos | null;
  topologyDetail: any;
  activeTopologies: TopologiesTypo | null;
  navigatingSetupTest: boolean;
  selectTopoloy: TopologiesTypo | null;
  testBlockData: TaskTypos[] | null | undefined;
  dutConfigData: any;
}

const initialState: TyposInitState = {
  selectTestSuite: null,
  testSuiteDetail: null,
  topologyDetail: null,
  activeTopologies: null,
  navigatingSetupTest: false,
  selectTopoloy: null,
  testBlockData: null,
  dutConfigData: null,
};

const setupTestSlice = createSlice({
  name: "setupTest",
  initialState,
  reducers: {
    setSelectTestData: (state, { payload }) => {
      state.selectTestSuite = payload;
    },
    setTopologyDetail: (state, { payload }) => {
      state.topologyDetail = payload;
    },
    setTestSuiteDetail: (state, { payload }) => {
      state.testSuiteDetail = payload;
      state.selectTestSuite = null;
    },
    setActiveTopologies: (state, { payload }) => {
      state.activeTopologies = payload;
    },
    setNavigatingSetupTest: (state) => {
      state.navigatingSetupTest = true;
    },
    setSelectTopologyData: (state, { payload }) => {
      state.selectTopoloy = payload;
    },
    setSetupTestNull: (state) => {
      state.activeTopologies = null;
      state.navigatingSetupTest = false;
      state.selectTestSuite = null;
      state.testSuiteDetail = null;
      state.topologyDetail = null;
      state.selectTopoloy = null;
      state.testBlockData = null;
      state.dutConfigData = null;
    },
    setTestBlockData: (state, { payload }: { payload: TaskTypos[] | null }) => {
      const queueData = payload?.filter(
        (task: TaskTypos) => task.columnId === "queue"
      );
      state.testBlockData =
        queueData && queueData.length > 0 ? queueData : null;
    },
    setDutConfigData: (state, { payload }) => {
      state.dutConfigData = payload;
      console.log(state.dutConfigData);
    },
  },
});

export const {
  setSelectTestData,
  setTestSuiteDetail,
  setActiveTopologies,
  setNavigatingSetupTest,
  setSelectTopologyData,
  setSetupTestNull,
  setTestBlockData,
  setDutConfigData,
} = setupTestSlice.actions;
export default setupTestSlice.reducer;
