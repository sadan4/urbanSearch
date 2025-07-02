/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 sadan and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ConnectSrc, CspPolicies } from "@main/csp";

CspPolicies["https://api.urbandictionary.com"] = ConnectSrc;
