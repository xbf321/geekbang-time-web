export default function renderUnit(pubCount = 0, totalCount = 0) {
  if (Number(pubCount) === Number(totalCount)) {
    return `共 ${totalCount} 讲`;
  }
  return `已更新 ${pubCount } 讲 / 共 ${totalCount} 讲`;
};
