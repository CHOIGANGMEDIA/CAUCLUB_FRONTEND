/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     src/proto/grpc/health/v1/health.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#include <stddef.h>
#include "upb/msg_internal.h"
#include "src/proto/grpc/health/v1/health.upb.h"

#include "upb/port_def.inc"

static const upb_msglayout_field grpc_health_v1_HealthCheckRequest__fields[1] = {
  {1, UPB_SIZE(0, 0), 0, 0, 9, _UPB_MODE_SCALAR | (_UPB_REP_STRVIEW << _UPB_REP_SHIFT)},
};

const upb_msglayout grpc_health_v1_HealthCheckRequest_msginit = {
  NULL,
  &grpc_health_v1_HealthCheckRequest__fields[0],
  UPB_SIZE(8, 16), 1, _UPB_MSGEXT_NONE, 1, 255,
};

static const upb_msglayout_field grpc_health_v1_HealthCheckResponse__fields[1] = {
  {1, UPB_SIZE(0, 0), 0, 0, 14, _UPB_MODE_SCALAR | (_UPB_REP_4BYTE << _UPB_REP_SHIFT)},
};

const upb_msglayout grpc_health_v1_HealthCheckResponse_msginit = {
  NULL,
  &grpc_health_v1_HealthCheckResponse__fields[0],
  UPB_SIZE(8, 8), 1, _UPB_MSGEXT_NONE, 1, 255,
};

static const upb_msglayout *messages_layout[2] = {
  &grpc_health_v1_HealthCheckRequest_msginit,
  &grpc_health_v1_HealthCheckResponse_msginit,
};

const upb_msglayout_file src_proto_grpc_health_v1_health_proto_upb_file_layout = {
  messages_layout,
  NULL,
  2,
  0,
};

#include "upb/port_undef.inc"

