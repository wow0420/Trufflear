/**
 * @fileoverview gRPC-Web generated client stub for influencer
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.1
// source: src/network/services/influencer_public_profile_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var src_network_services_influencer_profile_pb = require('../../../src/network/services/influencer_profile_pb.js')
const proto = {};
proto.influencer = require('./influencer_public_profile_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.influencer.InfluencerPublicProfileServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.influencer.InfluencerPublicProfileServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.influencer.GetInfluencerPublicProfileRequest,
 *   !proto.influencer.GetInfluencerPublicProfileResponse>}
 */
const methodDescriptor_InfluencerPublicProfileService_GetInfluencerPublicProfile = new grpc.web.MethodDescriptor(
  '/influencer.InfluencerPublicProfileService/GetInfluencerPublicProfile',
  grpc.web.MethodType.UNARY,
  proto.influencer.GetInfluencerPublicProfileRequest,
  proto.influencer.GetInfluencerPublicProfileResponse,
  /**
   * @param {!proto.influencer.GetInfluencerPublicProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.influencer.GetInfluencerPublicProfileResponse.deserializeBinary
);


/**
 * @param {!proto.influencer.GetInfluencerPublicProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.influencer.GetInfluencerPublicProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.influencer.GetInfluencerPublicProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.influencer.InfluencerPublicProfileServiceClient.prototype.getInfluencerPublicProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/influencer.InfluencerPublicProfileService/GetInfluencerPublicProfile',
      request,
      metadata || {},
      methodDescriptor_InfluencerPublicProfileService_GetInfluencerPublicProfile,
      callback);
};


/**
 * @param {!proto.influencer.GetInfluencerPublicProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.influencer.GetInfluencerPublicProfileResponse>}
 *     Promise that resolves to the response
 */
proto.influencer.InfluencerPublicProfileServicePromiseClient.prototype.getInfluencerPublicProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/influencer.InfluencerPublicProfileService/GetInfluencerPublicProfile',
      request,
      metadata || {},
      methodDescriptor_InfluencerPublicProfileService_GetInfluencerPublicProfile);
};


module.exports = proto.influencer;

