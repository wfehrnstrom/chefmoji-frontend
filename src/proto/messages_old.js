/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chefmoji = (function() {

    /**
     * Namespace chefmoji.
     * @exports chefmoji
     * @namespace
     */
    var chefmoji = {};

    chefmoji.MapUpdate = (function() {

        /**
         * Properties of a MapUpdate.
         * @memberof chefmoji
         * @interface IMapUpdate
         * @property {Array.<string>|null} [map] MapUpdate map
         * @property {Array.<chefmoji.IPlayerUpdate>|null} [players] MapUpdate players
         * @property {Array.<chefmoji.IOrderUpdate>|null} [order] MapUpdate order
         */

        /**
         * Constructs a new MapUpdate.
         * @memberof chefmoji
         * @classdesc Represents a MapUpdate.
         * @implements IMapUpdate
         * @constructor
         * @param {chefmoji.IMapUpdate=} [properties] Properties to set
         */
        function MapUpdate(properties) {
            this.map = [];
            this.players = [];
            this.order = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MapUpdate map.
         * @member {Array.<string>} map
         * @memberof chefmoji.MapUpdate
         * @instance
         */
        MapUpdate.prototype.map = $util.emptyArray;

        /**
         * MapUpdate players.
         * @member {Array.<chefmoji.IPlayerUpdate>} players
         * @memberof chefmoji.MapUpdate
         * @instance
         */
        MapUpdate.prototype.players = $util.emptyArray;

        /**
         * MapUpdate order.
         * @member {Array.<chefmoji.IOrderUpdate>} order
         * @memberof chefmoji.MapUpdate
         * @instance
         */
        MapUpdate.prototype.order = $util.emptyArray;

        /**
         * Creates a new MapUpdate instance using the specified properties.
         * @function create
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {chefmoji.IMapUpdate=} [properties] Properties to set
         * @returns {chefmoji.MapUpdate} MapUpdate instance
         */
        MapUpdate.create = function create(properties) {
            return new MapUpdate(properties);
        };

        /**
         * Encodes the specified MapUpdate message. Does not implicitly {@link chefmoji.MapUpdate.verify|verify} messages.
         * @function encode
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {chefmoji.IMapUpdate} message MapUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map != null && message.map.length)
                for (var i = 0; i < message.map.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.map[i]);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.chefmoji.PlayerUpdate.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.order != null && message.order.length)
                for (var i = 0; i < message.order.length; ++i)
                    $root.chefmoji.OrderUpdate.encode(message.order[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MapUpdate message, length delimited. Does not implicitly {@link chefmoji.MapUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {chefmoji.IMapUpdate} message MapUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MapUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chefmoji.MapUpdate} MapUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chefmoji.MapUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.map && message.map.length))
                        message.map = [];
                    message.map.push(reader.string());
                    break;
                case 2:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.chefmoji.PlayerUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.order && message.order.length))
                        message.order = [];
                    message.order.push($root.chefmoji.OrderUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MapUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chefmoji.MapUpdate} MapUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapUpdate message.
         * @function verify
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.map != null && message.hasOwnProperty("map")) {
                if (!Array.isArray(message.map))
                    return "map: array expected";
                for (var i = 0; i < message.map.length; ++i)
                    if (!$util.isString(message.map[i]))
                        return "map: string[] expected";
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.chefmoji.PlayerUpdate.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.order != null && message.hasOwnProperty("order")) {
                if (!Array.isArray(message.order))
                    return "order: array expected";
                for (var i = 0; i < message.order.length; ++i) {
                    var error = $root.chefmoji.OrderUpdate.verify(message.order[i]);
                    if (error)
                        return "order." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MapUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chefmoji.MapUpdate} MapUpdate
         */
        MapUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.chefmoji.MapUpdate)
                return object;
            var message = new $root.chefmoji.MapUpdate();
            if (object.map) {
                if (!Array.isArray(object.map))
                    throw TypeError(".chefmoji.MapUpdate.map: array expected");
                message.map = [];
                for (var i = 0; i < object.map.length; ++i)
                    message.map[i] = String(object.map[i]);
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".chefmoji.MapUpdate.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".chefmoji.MapUpdate.players: object expected");
                    message.players[i] = $root.chefmoji.PlayerUpdate.fromObject(object.players[i]);
                }
            }
            if (object.order) {
                if (!Array.isArray(object.order))
                    throw TypeError(".chefmoji.MapUpdate.order: array expected");
                message.order = [];
                for (var i = 0; i < object.order.length; ++i) {
                    if (typeof object.order[i] !== "object")
                        throw TypeError(".chefmoji.MapUpdate.order: object expected");
                    message.order[i] = $root.chefmoji.OrderUpdate.fromObject(object.order[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MapUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chefmoji.MapUpdate
         * @static
         * @param {chefmoji.MapUpdate} message MapUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.map = [];
                object.players = [];
                object.order = [];
            }
            if (message.map && message.map.length) {
                object.map = [];
                for (var j = 0; j < message.map.length; ++j)
                    object.map[j] = message.map[j];
            }
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.chefmoji.PlayerUpdate.toObject(message.players[j], options);
            }
            if (message.order && message.order.length) {
                object.order = [];
                for (var j = 0; j < message.order.length; ++j)
                    object.order[j] = $root.chefmoji.OrderUpdate.toObject(message.order[j], options);
            }
            return object;
        };

        /**
         * Converts this MapUpdate to JSON.
         * @function toJSON
         * @memberof chefmoji.MapUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MapUpdate;
    })();

    chefmoji.PlayerUpdate = (function() {

        /**
         * Properties of a PlayerUpdate.
         * @memberof chefmoji
         * @interface IPlayerUpdate
         * @property {Array.<number>|null} [position] PlayerUpdate position
         * @property {string|null} [inventory] PlayerUpdate inventory
         * @property {string|null} [id] PlayerUpdate id
         */

        /**
         * Constructs a new PlayerUpdate.
         * @memberof chefmoji
         * @classdesc Represents a PlayerUpdate.
         * @implements IPlayerUpdate
         * @constructor
         * @param {chefmoji.IPlayerUpdate=} [properties] Properties to set
         */
        function PlayerUpdate(properties) {
            this.position = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerUpdate position.
         * @member {Array.<number>} position
         * @memberof chefmoji.PlayerUpdate
         * @instance
         */
        PlayerUpdate.prototype.position = $util.emptyArray;

        /**
         * PlayerUpdate inventory.
         * @member {string} inventory
         * @memberof chefmoji.PlayerUpdate
         * @instance
         */
        PlayerUpdate.prototype.inventory = "";

        /**
         * PlayerUpdate id.
         * @member {string} id
         * @memberof chefmoji.PlayerUpdate
         * @instance
         */
        PlayerUpdate.prototype.id = "";

        /**
         * Creates a new PlayerUpdate instance using the specified properties.
         * @function create
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {chefmoji.IPlayerUpdate=} [properties] Properties to set
         * @returns {chefmoji.PlayerUpdate} PlayerUpdate instance
         */
        PlayerUpdate.create = function create(properties) {
            return new PlayerUpdate(properties);
        };

        /**
         * Encodes the specified PlayerUpdate message. Does not implicitly {@link chefmoji.PlayerUpdate.verify|verify} messages.
         * @function encode
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {chefmoji.IPlayerUpdate} message PlayerUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && message.position.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.position.length; ++i)
                    writer.uint32(message.position[i]);
                writer.ldelim();
            }
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inventory);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified PlayerUpdate message, length delimited. Does not implicitly {@link chefmoji.PlayerUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {chefmoji.IPlayerUpdate} message PlayerUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chefmoji.PlayerUpdate} PlayerUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chefmoji.PlayerUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.position && message.position.length))
                        message.position = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.position.push(reader.uint32());
                    } else
                        message.position.push(reader.uint32());
                    break;
                case 2:
                    message.inventory = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chefmoji.PlayerUpdate} PlayerUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerUpdate message.
         * @function verify
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                if (!Array.isArray(message.position))
                    return "position: array expected";
                for (var i = 0; i < message.position.length; ++i)
                    if (!$util.isInteger(message.position[i]))
                        return "position: integer[] expected";
            }
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a PlayerUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chefmoji.PlayerUpdate} PlayerUpdate
         */
        PlayerUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.chefmoji.PlayerUpdate)
                return object;
            var message = new $root.chefmoji.PlayerUpdate();
            if (object.position) {
                if (!Array.isArray(object.position))
                    throw TypeError(".chefmoji.PlayerUpdate.position: array expected");
                message.position = [];
                for (var i = 0; i < object.position.length; ++i)
                    message.position[i] = object.position[i] >>> 0;
            }
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a PlayerUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chefmoji.PlayerUpdate
         * @static
         * @param {chefmoji.PlayerUpdate} message PlayerUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.position = [];
            if (options.defaults) {
                object.inventory = "";
                object.id = "";
            }
            if (message.position && message.position.length) {
                object.position = [];
                for (var j = 0; j < message.position.length; ++j)
                    object.position[j] = message.position[j];
            }
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PlayerUpdate to JSON.
         * @function toJSON
         * @memberof chefmoji.PlayerUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerUpdate;
    })();

    /**
     * OrderType enum.
     * @name chefmoji.OrderType
     * @enum {string}
     * @property {number} HOT_DOG=0 HOT_DOG value
     * @property {number} PIZZA=1 PIZZA value
     * @property {number} TACO=2 TACO value
     * @property {number} GYRO=3 GYRO value
     * @property {number} SANDWICH=4 SANDWICH value
     * @property {number} HAMBURGER=5 HAMBURGER value
     * @property {number} WAFFLES=6 WAFFLES value
     * @property {number} PANCAKES=7 PANCAKES value
     * @property {number} EGGS=8 EGGS value
     * @property {number} BURRITO=9 BURRITO value
     * @property {number} SUSHI=10 SUSHI value
     * @property {number} RAMEN=11 RAMEN value
     * @property {number} BENTO_BOX=12 BENTO_BOX value
     * @property {number} STEW=13 STEW value
     * @property {number} CURRY_RICE=14 CURRY_RICE value
     */
    chefmoji.OrderType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HOT_DOG"] = 0;
        values[valuesById[1] = "PIZZA"] = 1;
        values[valuesById[2] = "TACO"] = 2;
        values[valuesById[3] = "GYRO"] = 3;
        values[valuesById[4] = "SANDWICH"] = 4;
        values[valuesById[5] = "HAMBURGER"] = 5;
        values[valuesById[6] = "WAFFLES"] = 6;
        values[valuesById[7] = "PANCAKES"] = 7;
        values[valuesById[8] = "EGGS"] = 8;
        values[valuesById[9] = "BURRITO"] = 9;
        values[valuesById[10] = "SUSHI"] = 10;
        values[valuesById[11] = "RAMEN"] = 11;
        values[valuesById[12] = "BENTO_BOX"] = 12;
        values[valuesById[13] = "STEW"] = 13;
        values[valuesById[14] = "CURRY_RICE"] = 14;
        return values;
    })();

    chefmoji.OrderUpdate = (function() {

        /**
         * Properties of an OrderUpdate.
         * @memberof chefmoji
         * @interface IOrderUpdate
         * @property {number|null} [uid] OrderUpdate uid
         * @property {number|null} [registrationTime] OrderUpdate registrationTime
         * @property {chefmoji.OrderType|null} [orderType] OrderUpdate orderType
         * @property {boolean|null} [fulfilled] OrderUpdate fulfilled
         */

        /**
         * Constructs a new OrderUpdate.
         * @memberof chefmoji
         * @classdesc Represents an OrderUpdate.
         * @implements IOrderUpdate
         * @constructor
         * @param {chefmoji.IOrderUpdate=} [properties] Properties to set
         */
        function OrderUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderUpdate uid.
         * @member {number} uid
         * @memberof chefmoji.OrderUpdate
         * @instance
         */
        OrderUpdate.prototype.uid = 0;

        /**
         * OrderUpdate registrationTime.
         * @member {number} registrationTime
         * @memberof chefmoji.OrderUpdate
         * @instance
         */
        OrderUpdate.prototype.registrationTime = 0;

        /**
         * OrderUpdate orderType.
         * @member {chefmoji.OrderType} orderType
         * @memberof chefmoji.OrderUpdate
         * @instance
         */
        OrderUpdate.prototype.orderType = 0;

        /**
         * OrderUpdate fulfilled.
         * @member {boolean} fulfilled
         * @memberof chefmoji.OrderUpdate
         * @instance
         */
        OrderUpdate.prototype.fulfilled = false;

        /**
         * Creates a new OrderUpdate instance using the specified properties.
         * @function create
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {chefmoji.IOrderUpdate=} [properties] Properties to set
         * @returns {chefmoji.OrderUpdate} OrderUpdate instance
         */
        OrderUpdate.create = function create(properties) {
            return new OrderUpdate(properties);
        };

        /**
         * Encodes the specified OrderUpdate message. Does not implicitly {@link chefmoji.OrderUpdate.verify|verify} messages.
         * @function encode
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {chefmoji.IOrderUpdate} message OrderUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.registrationTime != null && message.hasOwnProperty("registrationTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.registrationTime);
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.orderType);
            if (message.fulfilled != null && message.hasOwnProperty("fulfilled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.fulfilled);
            return writer;
        };

        /**
         * Encodes the specified OrderUpdate message, length delimited. Does not implicitly {@link chefmoji.OrderUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {chefmoji.IOrderUpdate} message OrderUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chefmoji.OrderUpdate} OrderUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chefmoji.OrderUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.registrationTime = reader.uint32();
                    break;
                case 3:
                    message.orderType = reader.int32();
                    break;
                case 4:
                    message.fulfilled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chefmoji.OrderUpdate} OrderUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderUpdate message.
         * @function verify
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.registrationTime != null && message.hasOwnProperty("registrationTime"))
                if (!$util.isInteger(message.registrationTime))
                    return "registrationTime: integer expected";
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                switch (message.orderType) {
                default:
                    return "orderType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    break;
                }
            if (message.fulfilled != null && message.hasOwnProperty("fulfilled"))
                if (typeof message.fulfilled !== "boolean")
                    return "fulfilled: boolean expected";
            return null;
        };

        /**
         * Creates an OrderUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chefmoji.OrderUpdate} OrderUpdate
         */
        OrderUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.chefmoji.OrderUpdate)
                return object;
            var message = new $root.chefmoji.OrderUpdate();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.registrationTime != null)
                message.registrationTime = object.registrationTime >>> 0;
            switch (object.orderType) {
            case "HOT_DOG":
            case 0:
                message.orderType = 0;
                break;
            case "PIZZA":
            case 1:
                message.orderType = 1;
                break;
            case "TACO":
            case 2:
                message.orderType = 2;
                break;
            case "GYRO":
            case 3:
                message.orderType = 3;
                break;
            case "SANDWICH":
            case 4:
                message.orderType = 4;
                break;
            case "HAMBURGER":
            case 5:
                message.orderType = 5;
                break;
            case "WAFFLES":
            case 6:
                message.orderType = 6;
                break;
            case "PANCAKES":
            case 7:
                message.orderType = 7;
                break;
            case "EGGS":
            case 8:
                message.orderType = 8;
                break;
            case "BURRITO":
            case 9:
                message.orderType = 9;
                break;
            case "SUSHI":
            case 10:
                message.orderType = 10;
                break;
            case "RAMEN":
            case 11:
                message.orderType = 11;
                break;
            case "BENTO_BOX":
            case 12:
                message.orderType = 12;
                break;
            case "STEW":
            case 13:
                message.orderType = 13;
                break;
            case "CURRY_RICE":
            case 14:
                message.orderType = 14;
                break;
            }
            if (object.fulfilled != null)
                message.fulfilled = Boolean(object.fulfilled);
            return message;
        };

        /**
         * Creates a plain object from an OrderUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chefmoji.OrderUpdate
         * @static
         * @param {chefmoji.OrderUpdate} message OrderUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.registrationTime = 0;
                object.orderType = options.enums === String ? "HOT_DOG" : 0;
                object.fulfilled = false;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.registrationTime != null && message.hasOwnProperty("registrationTime"))
                object.registrationTime = message.registrationTime;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = options.enums === String ? $root.chefmoji.OrderType[message.orderType] : message.orderType;
            if (message.fulfilled != null && message.hasOwnProperty("fulfilled"))
                object.fulfilled = message.fulfilled;
            return object;
        };

        /**
         * Converts this OrderUpdate to JSON.
         * @function toJSON
         * @memberof chefmoji.OrderUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderUpdate;
    })();

    chefmoji.PlayerAction = (function() {

        /**
         * Properties of a PlayerAction.
         * @memberof chefmoji
         * @interface IPlayerAction
         * @property {Uint8Array|null} [keyPress] PlayerAction keyPress
         */

        /**
         * Constructs a new PlayerAction.
         * @memberof chefmoji
         * @classdesc Represents a PlayerAction.
         * @implements IPlayerAction
         * @constructor
         * @param {chefmoji.IPlayerAction=} [properties] Properties to set
         */
        function PlayerAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerAction keyPress.
         * @member {Uint8Array} keyPress
         * @memberof chefmoji.PlayerAction
         * @instance
         */
        PlayerAction.prototype.keyPress = $util.newBuffer([]);

        /**
         * Creates a new PlayerAction instance using the specified properties.
         * @function create
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {chefmoji.IPlayerAction=} [properties] Properties to set
         * @returns {chefmoji.PlayerAction} PlayerAction instance
         */
        PlayerAction.create = function create(properties) {
            return new PlayerAction(properties);
        };

        /**
         * Encodes the specified PlayerAction message. Does not implicitly {@link chefmoji.PlayerAction.verify|verify} messages.
         * @function encode
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {chefmoji.IPlayerAction} message PlayerAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyPress != null && message.hasOwnProperty("keyPress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.keyPress);
            return writer;
        };

        /**
         * Encodes the specified PlayerAction message, length delimited. Does not implicitly {@link chefmoji.PlayerAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {chefmoji.IPlayerAction} message PlayerAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerAction message from the specified reader or buffer.
         * @function decode
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chefmoji.PlayerAction} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chefmoji.PlayerAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyPress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chefmoji.PlayerAction} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerAction message.
         * @function verify
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyPress != null && message.hasOwnProperty("keyPress"))
                if (!(message.keyPress && typeof message.keyPress.length === "number" || $util.isString(message.keyPress)))
                    return "keyPress: buffer expected";
            return null;
        };

        /**
         * Creates a PlayerAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chefmoji.PlayerAction} PlayerAction
         */
        PlayerAction.fromObject = function fromObject(object) {
            if (object instanceof $root.chefmoji.PlayerAction)
                return object;
            var message = new $root.chefmoji.PlayerAction();
            if (object.keyPress != null)
                if (typeof object.keyPress === "string")
                    $util.base64.decode(object.keyPress, message.keyPress = $util.newBuffer($util.base64.length(object.keyPress)), 0);
                else if (object.keyPress.length)
                    message.keyPress = object.keyPress;
            return message;
        };

        /**
         * Creates a plain object from a PlayerAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chefmoji.PlayerAction
         * @static
         * @param {chefmoji.PlayerAction} message PlayerAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.keyPress = "";
                else {
                    object.keyPress = [];
                    if (options.bytes !== Array)
                        object.keyPress = $util.newBuffer(object.keyPress);
                }
            if (message.keyPress != null && message.hasOwnProperty("keyPress"))
                object.keyPress = options.bytes === String ? $util.base64.encode(message.keyPress, 0, message.keyPress.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyPress) : message.keyPress;
            return object;
        };

        /**
         * Converts this PlayerAction to JSON.
         * @function toJSON
         * @memberof chefmoji.PlayerAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerAction;
    })();

    return chefmoji;
})();
const MapUpdate = $root.chefmoji.MapUpdate;
const OrderType = $root.chefmoji.OrderType;
const PlayerUpdate = $root.chefmoji.PlayerUpdate;
const OrderUpdate = $root.chefmoji.OrderUpdate;
module.exports = {
    default: $root.chefmoji,
    MapUpdate,
    OrderType,
    PlayerUpdate,
    OrderUpdate
};
