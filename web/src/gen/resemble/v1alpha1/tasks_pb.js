// @generated by protoc-gen-es v1.5.1
// @generated from file resemble/v1alpha1/tasks.proto (package resemble.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message resemble.v1alpha1.TaskId
 */
export const TaskId = proto3.makeMessageType(
  "resemble.v1alpha1.TaskId",
  () => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "actor_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "task_uuid", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message resemble.v1alpha1.WaitRequest
 */
export const WaitRequest = proto3.makeMessageType(
  "resemble.v1alpha1.WaitRequest",
  () => [
    { no: 1, name: "task_id", kind: "message", T: TaskId },
  ],
);

/**
 * @generated from message resemble.v1alpha1.WaitResponse
 */
export const WaitResponse = proto3.makeMessageType(
  "resemble.v1alpha1.WaitResponse",
  () => [
    { no: 1, name: "response", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message resemble.v1alpha1.ListPendingTasksRequest
 */
export const ListPendingTasksRequest = proto3.makeMessageType(
  "resemble.v1alpha1.ListPendingTasksRequest",
  [],
);

/**
 * @generated from message resemble.v1alpha1.ListPendingTasksResponse
 */
export const ListPendingTasksResponse = proto3.makeMessageType(
  "resemble.v1alpha1.ListPendingTasksResponse",
  () => [
    { no: 1, name: "task_ids", kind: "message", T: TaskId, repeated: true },
  ],
);

