import React from "react";
import { Card, Divider, List, notification, Spin } from "antd";
import { Announcement } from "./Announcement";
import { useApi } from "HOOK";

/**
 * @param isInternal {boolean} 是否为内部公告. 若为false则获取外部公告.
 * */
function AnnouncementList({ isInternal = false }) {
  /**
   * 是否显示点赞、评论区.
   * 对外部公告不显示.
   * */
  let showActions = false;

  let path;
  if (isInternal) {
    showActions = true;
    path = `/announcement`;
  } else {
    path = `/custom/announcement`;
  }

  const { hasData, payload, emitter, send } = useApi({ path });

  emitter.onError(error => {
    notification.error({
      message: "获取公告失败",
      description: error.toString(),
      duration: 0
    });
  });

  function handleUpdate() {
    send();
  }

  return (
    <Card>
      <h1>公告栏</h1>
      <Divider dashed />
      {!hasData() ? (
        <Spin />
      ) : (
        <List
          itemLayout="vertical"
          size="default"
          split
          dataSource={payload}
          renderItem={announceData => (
            <Announcement
              id={announceData._id}
              data={announceData}
              handleUpdate={handleUpdate}
              showActions={showActions}
            />
          )}
        />
      )}
    </Card>
  );
}

export { AnnouncementList };