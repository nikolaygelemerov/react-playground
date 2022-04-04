import AsyncSetStateClassCmp from './AsyncSetStateClassCmp/AsyncSetState';
import AwaitSetStateFuncCmp from './AwaitSetStateFuncCmp/AwaitSetState';
import ContextApi from './ContextApi/ContextApi';
import DefaultObjectProps from './DefaultObjectProps/DefaultObjectProps';
import DepArray from './DepArray/DepArray';
import EffectsUpdateFlow from './EffectsUpdateFlow/EffectsUpdateFlow';
import List from './List/List';
import ListOptimization from './ListOptimization/ListOptimization';
import MemoizationPerformance from './MemoizationPerformance/MemoizationPerformance';
import Mount from './Mount/Mount';
import Parent from './Parent/Parent';
import Refs from './Refs/Refs';
import RenderChildFromConstant from './RenderChildFromConstant/RenderChildFromConstant';
import RenderChildren from './RenderChildren/RenderChildren';
import ScrollComponent from './ScrollComponent/ScrollComponent';
import ThisInClassCmp from './ThisInClassCmp/ThisInClassCmp';
import Todo from './Todo/Todo';
import Unmount from './Unmount/Unmount';
import UseAsyncState from './UseAsyncState/UseAsyncState';
import UseCallback from './UseCallback/UseCallback';
import UseEffectVsUseLayoutEffect from './UseEffectVsUseLayoutEffect/UseEffectVsUseLayoutEffect';
import UsePrevious from './UsePrevious/UsePrevious';
import UseEffectDependency from './UseEffectDependency/UseEffectDependency';

const pages = [
  {
    name: 'AsyncSetStateClassCmp',
    route: 'AsyncSetStateClassCmp',
    Cmp: AsyncSetStateClassCmp
  },
  {
    name: 'AwaitSetStateFuncCmp',
    route: 'AwaitSetStateFuncCmp',
    Cmp: AwaitSetStateFuncCmp
  },
  { name: 'ContextApi', route: 'ContextApi', Cmp: ContextApi },
  {
    name: 'DefaultObjectProps',
    route: 'DefaultObjectProps',
    Cmp: DefaultObjectProps
  },
  { name: 'DepArray', route: 'DepArray', Cmp: DepArray },
  {
    name: 'EffectsUpdateFlow',
    route: 'EffectsUpdateFlow',
    Cmp: EffectsUpdateFlow
  },
  { name: 'List', route: 'List', Cmp: List },
  {
    name: 'ListOptimization',
    route: 'ListOptimization',
    Cmp: ListOptimization
  },
  {
    name: 'MemoizationPerformance',
    route: 'MemoizationPerformance',
    Cmp: MemoizationPerformance
  },
  { name: 'Mount', route: 'Mount', Cmp: Mount },
  { name: 'Parent', route: 'Parent', Cmp: Parent },
  { name: 'Refs', route: 'Refs', Cmp: Refs },
  {
    name: 'RenderChildFromConstant',
    route: 'RenderChildFromConstant',
    Cmp: RenderChildFromConstant
  },
  { name: 'RenderChildren', route: 'RenderChildren', Cmp: RenderChildren },
  { name: 'ScrollComponent', route: 'ScrollComponent', Cmp: ScrollComponent },
  { name: 'ThisInClassCmp', route: 'ThisInClassCmp', Cmp: ThisInClassCmp },
  { name: 'Todo', route: 'Todo', Cmp: Todo },
  { name: 'Unmount', route: 'Unmount', Cmp: Unmount },
  { name: 'UseAsyncState', route: 'UseAsyncState', Cmp: UseAsyncState },
  { name: 'UseCallback', route: 'UseCallback', Cmp: UseCallback },
  {
    name: 'UseEffectVsUseLayoutEffect',
    route: 'UseEffectVsUseLayoutEffect',
    Cmp: UseEffectVsUseLayoutEffect
  },
  { name: 'UsePrevious', route: 'UsePrevious', Cmp: UsePrevious },
  {
    name: 'UseEffectDependency',
    route: 'UseEffectDependency',
    Cmp: UseEffectDependency
  }
];

export default pages;
