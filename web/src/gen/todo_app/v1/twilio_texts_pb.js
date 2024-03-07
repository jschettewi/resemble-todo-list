// @generated by protoc-gen-es v1.7.2
// @generated from file todo_app/v1/twilio_texts.proto (package todo_app.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { TaskId } from "../../resemble/v1alpha1/tasks_pb.js";

/**
 * @generated from message todo_app.v1.UniqueText
 */
export const UniqueText = proto3.makeMessageType(
  "todo_app.v1.UniqueText",
  () => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "create_time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "num_times", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message todo_app.v1.Pair
 */
export const Pair = proto3.makeMessageType(
  "todo_app.v1.Pair",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message todo_app.v1.Text
 */
export const Text = proto3.makeMessageType(
  "todo_app.v1.Text",
  () => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "from_", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
    { no: 5, name: "accepted_time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.TwilioTextsState
 */
export const TwilioTextsState = proto3.makeMessageType(
  "todo_app.v1.TwilioTextsState",
  () => [
    { no: 1, name: "texts_to_send", kind: "message", T: Text, repeated: true },
    { no: 2, name: "texts_accepted", kind: "message", T: Text, repeated: true },
  ],
);

/**
 * string to = 1;
 * string body = 2;
 * string create_time = 3;
 *
 * @generated from message todo_app.v1.CreateTwilioTextRequest
 */
export const CreateTwilioTextRequest = proto3.makeMessageType(
  "todo_app.v1.CreateTwilioTextRequest",
  [],
);

/**
 * resemble.v1alpha1.TaskId reminder_text_task_id = 1;
 *
 * @generated from message todo_app.v1.CreateTwilioTextResponse
 */
export const CreateTwilioTextResponse = proto3.makeMessageType(
  "todo_app.v1.CreateTwilioTextResponse",
  [],
);

/**
 * @generated from message todo_app.v1.AddTextRequest
 */
export const AddTextRequest = proto3.makeMessageType(
  "todo_app.v1.AddTextRequest",
  () => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "create_time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message todo_app.v1.AddTextResponse
 */
export const AddTextResponse = proto3.makeMessageType(
  "todo_app.v1.AddTextResponse",
  () => [
    { no: 1, name: "reminder_text_task_id", kind: "message", T: TaskId },
  ],
);

/**
 * @generated from message todo_app.v1.ListTextsRequest
 */
export const ListTextsRequest = proto3.makeMessageType(
  "todo_app.v1.ListTextsRequest",
  [],
);

/**
 * @generated from message todo_app.v1.ListTextsResponse
 */
export const ListTextsResponse = proto3.makeMessageType(
  "todo_app.v1.ListTextsResponse",
  () => [
    { no: 1, name: "uniquetexts", kind: "message", T: UniqueText, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.TwilioReminderTextTaskRequest
 */
export const TwilioReminderTextTaskRequest = proto3.makeMessageType(
  "todo_app.v1.TwilioReminderTextTaskRequest",
  () => [
    { no: 1, name: "text_to_send", kind: "message", T: Text },
  ],
);

