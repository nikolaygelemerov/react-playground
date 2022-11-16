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
import RounikPlayground from './RounikPlayground/RounikPlayground';
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
    Cmp: AsyncSetStateClassCmp,
    name: 'AsyncSetStateClassCmp',
    route: 'AsyncSetStateClassCmp'
  },
  {
    Cmp: AwaitSetStateFuncCmp,
    name: 'AwaitSetStateFuncCmp',
    route: 'AwaitSetStateFuncCmp'
  },
  { Cmp: ContextApi, name: 'ContextApi', route: 'ContextApi' },
  {
    Cmp: DefaultObjectProps,
    name: 'DefaultObjectProps',
    route: 'DefaultObjectProps'
  },
  { Cmp: DepArray, name: 'DepArray', route: 'DepArray' },
  {
    Cmp: EffectsUpdateFlow,
    name: 'EffectsUpdateFlow',
    route: 'EffectsUpdateFlow'
  },
  { Cmp: List, name: 'List', route: 'List' },
  {
    Cmp: ListOptimization,
    name: 'ListOptimization',
    route: 'ListOptimization'
  },
  {
    Cmp: MemoizationPerformance,
    name: 'MemoizationPerformance',
    route: 'MemoizationPerformance'
  },
  { Cmp: Mount, name: 'Mount', route: 'Mount' },
  { Cmp: Parent, name: 'Parent', route: 'Parent' },
  { Cmp: Refs, name: 'Refs', route: 'Refs' },
  {
    Cmp: RenderChildFromConstant,
    name: 'RenderChildFromConstant',
    route: 'RenderChildFromConstant'
  },
  { Cmp: RenderChildren, name: 'RenderChildren', route: 'RenderChildren' },
  {
    Cmp: RounikPlayground,
    name: 'RounikPlayground',
    route: 'RounikPlayground'
  },
  { Cmp: ScrollComponent, name: 'ScrollComponent', route: 'ScrollComponent' },
  { Cmp: ThisInClassCmp, name: 'ThisInClassCmp', route: 'ThisInClassCmp' },
  { Cmp: Todo, name: 'Todo', route: 'Todo' },
  { Cmp: Unmount, name: 'Unmount', route: 'Unmount' },
  { Cmp: UseAsyncState, name: 'UseAsyncState', route: 'UseAsyncState' },
  { Cmp: UseCallback, name: 'UseCallback', route: 'UseCallback' },
  {
    Cmp: UseEffectVsUseLayoutEffect,
    name: 'UseEffectVsUseLayoutEffect',
    route: 'UseEffectVsUseLayoutEffect'
  },
  { Cmp: UsePrevious, name: 'UsePrevious', route: 'UsePrevious' },
  {
    Cmp: UseEffectDependency,
    name: 'UseEffectDependency',
    route: 'UseEffectDependency'
  }
];

export default pages;
